import db from '@/lib/db' // Kysely instance
import { NextRequest, NextResponse } from 'next/server'

// Data validation function (optional)
function validateUserData(data: any): { name: string; email: string } | null {
  if (typeof data.name === 'string' && typeof data.email === 'string') {
    return { name: data.name, email: data.email }
  }
  return null
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() // Get request data
    const userData = validateUserData(body) // Validate data

    if (!userData) {
      return NextResponse.json(
        { message: 'Invalid user data' },
        { status: 400 },
      )
    }

    // Insert data into the 'users' table
    await db
      .insertInto('users')
      .values({ name: userData.name, email: userData.email })
      .execute()

    return NextResponse.json(
      { message: 'User added successfully!' },
      { status: 201 }, // HTTP status 201 for successful creation
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while adding the user',
        error: (error as Error).message,
      },
      { status: 500 }, // HTTP status 500 for server errors
    )
  }
}
