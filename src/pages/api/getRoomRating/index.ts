import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

function trimNumber(num: number): number {
  return parseFloat(num.toFixed(1))
}

const getRoomAverageRating = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    // eslint-disable-next-line camelcase
    const { roomId } = req.query

    // eslint-disable-next-line camelcase
    if (!roomId) {
      return res.status(400).json({ error: 'Missing id_room parameter' })
    }

    const roomRatings = await prisma.roomRating.findMany({
      where: {
        id_room: Number(roomId),
      },
      select: {
        rating: true,
      },
    })

    if (roomRatings.length === 0) {
      return res.status(404).json({ error: 'No ratings found for the room' })
    }

    const totalRating = roomRatings.reduce(
      (sum, rating) => sum + rating.rating,
      0,
    )
    let averageRating = totalRating / roomRatings.length
    averageRating = trimNumber(averageRating)

    return res.status(200).json({ averageRating })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Error getting room average rating' })
  } finally {
    await prisma.$disconnect()
  }
}

export default getRoomAverageRating
