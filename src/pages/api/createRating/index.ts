// import { PrismaClient } from '@prisma/client'
// import type { NextApiRequest, NextApiResponse } from 'next'

// const prisma = new PrismaClient()

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === 'GET') {
//     try {
//       const ratings = await prisma.ratings.findMany()
//       res.status(200).json(ratings)
//     } catch (error) {
//       console.error(error)
//       res.status(500).json({ error: 'Erro ao obter os ratings' })
//     }
//   } else if (req.method === 'POST') {
//     // eslint-disable-next-line camelcase
//     const { description, id_user, id_room } = req.body

//     try {
//       const newRating = await prisma.ratings.create({
//         data: {
//           description,
//           // eslint-disable-next-line camelcase
//           id_user,
//           // eslint-disable-next-line camelcase
//           id_room,
//         },
//       })

//       res.status(201).json(newRating)
//     } catch (error) {
//       console.error(error)
//       res.status(500).json({ error: 'Erro ao criar o rating' })
//     }
//   } else {
//     res.status(405).end() // Método não permitido (não é GET nem POST)
//   }
// }
