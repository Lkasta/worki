import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Função para buscar informações do usuário com base no userId
export const getUserInfo = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    return user // Retorna as informações do usuário se encontradas
  } catch (error) {
    console.error(error)
    return null // Retorna null ou uma mensagem de erro se o usuário não for encontrado
  }
}

export default getUserInfo
