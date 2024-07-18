import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      })
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ error: 'User already exists or other error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
