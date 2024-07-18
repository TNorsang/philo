import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, username, password } = body

    // Email exists?
    const existingEmail = await prisma.user.findUnique({
      where: { email: email },
    })
    if (existingEmail)
      return NextResponse.json(
        { user: null, message: 'Email already exists' },
        { status: 409 },
      )

    // Username exists?
    const existingUsername = await prisma.user.findUnique({
      where: { username: username },
    })
    if (existingUsername)
      return NextResponse.json(
        {
          user: null,
          message: 'Username already exists',
        },
        { status: 409 },
      )

    const hashedPassword = await hash(password, 10)
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })

    const { password: newUserPassword, ...rest } = newUser

    return NextResponse.json(
      {
        user: newUser,
        message: 'User created successfully',
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 },
    )
  }
}
