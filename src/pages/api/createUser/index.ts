import { createUser } from '@/lib/createUser'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const { nome, email, senha, CPF } = req.body

      const user = await createUser({
        username: nome,
        email,
        cpf: CPF,
        password: senha,
      })

      // Responda com sucesso
      res.status(200).json({ message: 'Usuário criado com sucesso' })
    } catch (error: any) {
      // Tratar 'error' como 'any'
      console.error(error)
      res.status(400).json({ error: error.message }) // Responda com a mensagem de erro personalizada
    }
  } else {
    res.status(405).end() // Método não permitido (não é POST)
  }
}
