// Exemplo: pages/api/rentreserves.js

import { getRentReserve } from '@/lib/getRentReserve'
import verifyToken from '@/lib/verifyToken'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = req.cookies['nextauth.token']

  if (!token) {
    return res.status(401).json({ error: 'Token not found' })
  }
  const userId = verifyToken(token, 'nextauth.token')

  const { method } = req

  if (method === 'GET') {
    const reservations = await getRentReserve(userId)

    return res.status(200).json({
      data: reservations,
    })
  }

  return res.status(405).json({ error: 'Method Not Allowed' })
}
