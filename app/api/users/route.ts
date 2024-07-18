import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const users = await NextResponse.json({
    message: 'Hello World',
  })
  return users
}
