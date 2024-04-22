import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await db.schema
      .createTable('users') // Table name
      .addColumn('id', 'serial', (col) => col.primaryKey()) // Auto-incrementing primary key
      .addColumn('name', 'varchar', (col) => col.notNull()) // Non-nullable name column
      .addColumn('email', 'varchar', (col) => col.unique().notNull()) // Unique, non-nullable email column
      .execute() // Execute table creation

    return NextResponse.json({ message: 'Users table created successfully!' }) // Success response
  } catch (error) {
    const errorMessage = (error as Error).message

    // Check if error indicates table already exists
    const isTableExistsError = errorMessage.includes('already exists')

    if (isTableExistsError) {
      return NextResponse.json({ message: 'Users table already exists.' })
    }

    // General error handling for other exceptions
    return NextResponse.json({
      message: 'An error occurred while creating the users table.',
      error: errorMessage,
    })
  }
}
