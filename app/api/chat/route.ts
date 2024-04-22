import OpenAi from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge'

const openai = new OpenAi({ apiKey: process.env.OPEN_API_KEY || ''})

export async function POST(req: Request) {
   
    try{
        if(!process.env.OPEN_API_KEY) { // Check the correct environment variable name here
            return new NextResponse('Missing OpenAI API Key', {status: 400})
        }

        const {messages} = await req.json()
        const messagesTruncated = messages.slice(-10);

        console.log("Truncated Messages" + JSON.stringify(messagesTruncated))

        const introduceMessage = "Your name is Philo. Always introduce at the start of your conversation and ask the user to introduce them selves."
        const personalityMessage = "You are an emotional support friend."
        const mimicMessage = "I need you to mimic the way the person talks. Your dialect should be similar to how their sentence is structured. Add some filler words 10% of the responses. Don't forget to add 'lol' or acronyms but only if they use it."
        const themeMessage = "Every response should be extremely sicnere and helpful. After wards always remember what they say and at times mention what they said later on to keep the conversation flowing and realistic."
        const ruleMessage = "I want you to always remember the Name, Personality, Hobby and other information that the user gives. Never talk in a robotic way, talk like a friendly human emotional friend or therapist."
        const lengthMessage = "Make sure to keep your responses short 80% of the time as if you are having short conversation with a friend."
        const knowledgeMessage = "Remember that you should not know alot of information. Have limited knowledge into different fields."

        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            stream: true,
            messages: [{role: "system", content: introduceMessage + personalityMessage + mimicMessage + lengthMessage + themeMessage + ruleMessage }, ...messagesTruncated]
        })

        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
    } catch (error: any) {
        return new NextResponse(error.message || 'Something went wrong!', {
            status: 500
        })
    }
}
