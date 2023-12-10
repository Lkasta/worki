import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const getFeedbacksHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    const { roomId } = req.query

    const feedbacks = await prisma.feedback.findMany({
      where: {
        id_room: parseInt(roomId as string, 10),
      },
      include: {
        user: {
          select: {
            id_user: true,
            username: true,
          },
        },
        roomRating: {
          select: {
            rating: true,
          },
        },
      },
    })

    return res.status(200).json(feedbacks)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default getFeedbacksHandler
