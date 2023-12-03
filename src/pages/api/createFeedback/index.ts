import verifyToken from '@/lib/verifyToken'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const createFeedbackHandler = async (
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

    // eslint-disable-next-line camelcase
    const { id_room, feedback } = req.body

    const newFeedback = await prisma.feedback.create({
      data: {
        // eslint-disable-next-line camelcase
        id_user: userId,
        // eslint-disable-next-line camelcase
        id_room,
        feedback,
      },
    })
    return res.status(200).json({ message: 'Feedback created successfully' })
  } catch (error) {
    console.error(error)
    return res.status(401).json({ error: 'Error creating Feedback' })
  }
}

export default createFeedbackHandler
