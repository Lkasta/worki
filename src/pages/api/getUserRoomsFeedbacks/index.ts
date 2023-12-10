// pages/api/getUserRoomsFeedbacks.js

import verifyToken from '@/lib/verifyToken'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const getUserRoomsFeedbacks = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    const token = req.cookies['nextauth.token']

    if (!token) {
      return res.status(401).json({ error: 'Token not found' })
    }

    const userId = verifyToken(token, 'nextauth.token')

    // Busca os quartos alugados e com feedbacks para o usuário logado
    const userRoomsFeedbacks = await prisma.room.findMany({
      where: {
        id_user: userId,
      },
      include: {
        RentReserve: true,
        Feedback: {
          include: {
            user: true, // Inclui informações do usuário que fez o feedback
            roomRating: true,
          },
        },
      },
    })

    console.log(userRoomsFeedbacks)
    return res.status(200).json(userRoomsFeedbacks)
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'Error getting user rooms and feedbacks' })
  } finally {
    await prisma.$disconnect()
  }
}

export default getUserRoomsFeedbacks
