// Exemplo: lib/getRentReserve.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getRentReserve = async (userId: number) => {
  const reservations = await prisma.rentReserve.findMany({
    where: {
      user: {
        id_user: userId,
      },
    },
    include: {
      room: true,
    },
  })

  return reservations
}
