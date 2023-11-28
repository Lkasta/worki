// Importe o PrismaClient e outros módulos necessários
// ...

import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const cancelReservationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    const { reservationId } = req.body // Certifique-se de passar o ID da reserva

    // Atualize o status de cancelamento no banco de dados
    await prisma.rentReserve.update({
      where: { id_rent_reserve: reservationId },
      data: { canceled: true },
    })

    return res
      .status(200)
      .json({ message: 'Reservation canceled successfully' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default cancelReservationHandler
