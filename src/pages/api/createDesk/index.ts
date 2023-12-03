// pages/api/createDesk.ts
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

    console.log('descricao', description)
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
