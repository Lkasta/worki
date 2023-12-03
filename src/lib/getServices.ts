import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getServices() {
  const services = await prisma.services.findMany()

  return services
}
