import { getRooms } from '@/lib/rooms'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { startDate, endDate } = req.query

    // Verifica se startDate e endDate são arrays, então use o primeiro item
    const start = Array.isArray(startDate) ? startDate[0] : startDate
    const end = Array.isArray(endDate) ? endDate[0] : endDate

    const rooms = await getRooms(start, end)

    return res.status(200).json({
      data: rooms,
    })
  }
}
