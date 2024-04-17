import OpenAi from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge'

// Use the correct environment variable name here
const openai = new OpenAi({ apiKey: process.env.OPEN_API_KEY || ''})

export async function POST(req: Request) {
    try{
        if(!process.env.OPEN_API_KEY) { // Check the correct environment variable name here
            return new NextResponse('Missing OpenAI API Key', {status: 400})
        }
        const {messages} = await req.json()
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages
        })

        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
    } catch (error: any) {
        return new NextResponse(error.message || 'Something went wrong!', {
            status: 500
        })
    }
}
