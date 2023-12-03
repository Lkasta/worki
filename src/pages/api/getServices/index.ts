import { getServices } from '@/lib/getServices'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req

  if (method === 'GET') {
    const services = await getServices()

    return res.status(200).json({
      data: services,
    })
  }

  return res.status(405).json({ error: 'Method Not Allowed' })
}
