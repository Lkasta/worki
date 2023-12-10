// pages/api/createDesk.ts
import verifyToken from '@/lib/verifyToken'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  console.log('entrou aqui')
  const token = req.cookies['nextauth.token']

  if (!token) {
    return res.status(401).json({ error: 'Token not found' })
  }

  // eslint-disable-next-line camelcase
  const id_user = verifyToken(token, 'nextauth.token')
  console.log(id_user)

  // eslint-disable-next-line camelcase
  if (!id_user) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  try {
    // Extrair os dados do corpo da requisição
    const {
      name,
      description,
      city,
      postalCode,
      neighborhood,
      address,
      addressNumber,
      district,
      complement,
      price,
      rating,
      image1,
      image2,
      image3,
      services,
    } = req.body

    console.log(services)
    const createdDesk = await prisma.room.create({
      data: {
        name,
        description,
        city,
        postalCode,
        neighborhood,
        address,
        addressNumber,
        district,
        complement,
        price,
        rating,
        image1,
        image2,
        image3,
        // eslint-disable-next-line camelcase
        id_user,
        Room_Services: {
          create: services.map((serviceId: number) => ({
            service: { connect: { id_service: serviceId } },
          })),
        },
      },
    })

    return res
      .status(200)
      .json({ message: 'Desk created successfully', createdDesk })
  } catch (error) {
    console.error('Error creating desk:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
