import verifyToken from '@/lib/verifyToken'
import { PrismaClient } from '@prisma/client'
import { format } from 'date-fns'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const reserveRoomHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    const token = req.cookies['nextauth.token']

    if (!token) {
      return res.status(401).json({ error: 'Token not found' })
    }
    const userId = verifyToken(token, 'nextauth.token')

    const roomId = parseInt(req.body.roomId, 10)
    const { startDate } = req.body
    const { endDate } = req.body

    const existingReservation = await prisma.rentReserve.findFirst({
      where: {
        id_room: roomId,
        data_initial_reserve: {
          lte: new Date(endDate), // Verifica se a reserva existente se estende além do final desejado
        },
        data_final_reserve: {
          gte: new Date(startDate),
        },
        canceled: false,
      },
    })

    if (existingReservation) {
      const nextAvailableDate = new Date(existingReservation.data_final_reserve)
      nextAvailableDate.setDate(nextAvailableDate.getDate() + 1)
      const formattedDate = format(nextAvailableDate, 'dd-MM-yyyy')

      const response = {
        error: 'Room already reserved for the specified date',
        nextAvailableDate: formattedDate,
      }

      return res.status(400).json(response)
    }

    const reservation = await prisma.rentReserve.create({
      data: {
        id_user: userId, // Extrai o userId do token
        id_room: roomId,
        data_initial_reserve: new Date(startDate),
        data_final_reserve: new Date(endDate),
        canceled: false,
      },
    })

    return res.status(200).json({ message: 'Room reserved successfully' })
  } catch (error) {
    console.error(error)
    return res.status(401).json({ error: 'Invalid token' })
  }
}

export default reserveRoomHandler
