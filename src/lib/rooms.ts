import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRooms(startDate?: string, endDate?: string) {
  let rooms

  if (startDate && endDate) {
    // Se as datas foram fornecidas, filtre as salas com base nas datas
    rooms = await prisma.room.findMany({
      where: {
        RentReserve: {
          // Verifica se não há reservas que colidam com o intervalo fornecido
          every: {
            OR: [
              { data_initial_reserve: { gt: new Date(endDate) } },
              { data_final_reserve: { lt: new Date(startDate) } },
            ],
          },
        },
      },
    })
  } else {
    // Se não houver datas, simplesmente obtenha todas as salas
    rooms = await prisma.room.findMany()
  }

  return rooms
}
