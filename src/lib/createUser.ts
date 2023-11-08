import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (data: {
  username: string
  email: string
  cpf: string
  password: string
}) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        cpf: data.cpf,
        password: data.password,
      },
    })

    return user // Retorna as informações do usuário se criado com sucesso
  } catch (error) {
    console.error(error)
    throw new Error('Erro ao criar o usuário') // Lançar um erro com uma mensagem personalizada
  }
}
