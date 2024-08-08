import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '@/lib/db'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const SECRET = process.env.NEXTAUTH_SECRET

const authOptions: NextAuthOptions = {
  secret: SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID ?? '',
      clientSecret: GOOGLE_CLIENT_SECRET ?? '',
      checks: ['none'],
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
          username: profile.name || profile.email,
          password: '',
        },
        update: {
          username: profile.name || profile.email,
        },
      })
      return true
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as number
      } else {
        session.user = {
          id: token.id as number,
          email: '',
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
