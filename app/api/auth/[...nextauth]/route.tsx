import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/db'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID ?? '',
      clientSecret: GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile')
      }
      await prisma.user.upsert({
        where: { email: profile.email },
        create: {
          email: profile.email,
          username: profile.name || profile.email, // Handle missing name
          password: '',
        },
        update: {
          username: profile.name || profile.email, // Handle missing name
        },
      })
      return true
    },
    async session({ session, token }) {
      // Ensure session.user is defined
      if (session.user) {
        session.user.id = token.id as number // Set user ID in session
      } else {
        session.user = {
          id: token.id as number,
          email: '', // Default values; should be properly set if necessary
          name: '',
        }
      }
      return session
    },
    async jwt({ token, profile }) {
      if (profile) {
        const user = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        })
        if (!user) {
          throw new Error('No user found')
        }
        token.id = user.id
      }
      return token
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
