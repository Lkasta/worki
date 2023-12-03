import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const getFeedbacksHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    // Obtenha o parâmetro de consulta "roomId" da solicitação
    const { roomId } = req.query // Use req.query para parâmetros de consulta

    // Se o parâmetro roomId estiver presente, filtre os feedbacks por esse quarto
    const feedbacks = await prisma.feedback.findMany({
      where: {
        id_room: parseInt(roomId as string, 10), // Converte para um número inteiro
      },
      include: {
        user: {
          select: {
            id_user: true,
            username: true, // Adicione outros campos do usuário, se necessário
          },
        },
      },
    })

    return res.status(200).json(feedbacks)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default getFeedbacksHandler
