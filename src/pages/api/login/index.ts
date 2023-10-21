// pages/api/login.js

import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    try {
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      })

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' })
      }

      if (user.password !== password) {
        return res.status(401).json({ message: 'Credenciais inválidas' })
      }

      // Gere um token JWT
      const token = jwt.sign({ userId: user.id }, 'segredo_super_secreto', {
        expiresIn: '1h',
      })

      res.status(200).json({ token })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Erro no servidor' })
    }
  } else {
    res.status(405).end() // Método HTTP não permitido
  }
}
