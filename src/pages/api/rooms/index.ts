import { getRooms } from '@/lib/rooms'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req

  if (req.method === 'GET') {
    const rooms = await getRooms()

    return res.status(200).json({
      data: rooms,
    })
  }
}
