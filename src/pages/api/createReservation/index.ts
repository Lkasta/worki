import verifyToken from '@/lib/verifyToken'
import { PrismaClient } from '@prisma/client'
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
    const { date } = req.body

    const existingReservation = await prisma.rentReserve.findFirst({
      where: {
        id_room: roomId,
        data_initial_reserve: {
          lte: new Date(date),
        },
        data_final_reserve: {
          gte: new Date(date),
        },
      },
    })

    if (existingReservation) {
      return res
        .status(400)
        .json({ error: 'Room already reserved for the specified date' })
    }

    const reservation = await prisma.rentReserve.create({
      data: {
        id_user: userId, // Extrai o userId do token
        id_room: roomId,
        data_initial_reserve: new Date(date),
        data_final_reserve: new Date(date), // Ajuste conforme necessário
      },
    })

    return res.status(200).json({ message: 'Room reserved successfully' })
  } catch (error) {
    console.error(error)
    return res.status(401).json({ error: 'Invalid token' })
  }
}

export default reserveRoomHandler
