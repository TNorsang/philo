import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    const name = req.body
    const newUser = await prisma.user.create({
      data: name,
    })
    res.status(201).json(newUser)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end('Method ${req.method} Not Allowed')
  }
}
