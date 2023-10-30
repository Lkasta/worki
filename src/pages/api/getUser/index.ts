import { getUserInfo } from '@/lib/getUser'
import verifyToken from '@/lib/verifyToken'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const token = req.cookies['nextauth.token']

    console.log(token)

    if (!token) {
      return res.status(401).json({ error: 'Token not found' })
    }

    const userId = verifyToken(token, 'nextauth.token')

    if (!userId) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    const user = await getUserInfo(userId)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.status(200).json(user)
  }
}
