// pages/api/rooms/[id].ts

import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query

  try {
    const room = await prisma.room.findUnique({
      where: {
        id_room: parseInt(id as string, 10), // Certifique-se de fazer a conversão apropriada
      },
      include: {
        Room_Services: {
          include: {
            service: true,
          },
        },
      },
    })

    if (!room) {
      res.status(404).json({ message: 'Quarto não encontrado' })
      return
    }

    res.status(200).json(room)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro interno do servidor' })
  }
}
