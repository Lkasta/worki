import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRooms() {
  const rooms = await prisma.room.findMany()

  return rooms
}
