import { createGroq } from '@ai-sdk/groq'
import { streamText } from 'ai'

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

export const maxDuration = 30

export async function POST(req: Request) {
  const { type, details, recipientName, recipientDesignation, senderName, senderAddress, issueDescription, reliefSought } = await req.json()

  const systemPrompt = `You are NyayAI, an expert at drafting formal complaint letters for Indian citizens. Generate a professional, legally sound complaint letter based on the provided information.

LETTER FORMAT GUIDELINES:
1. Use proper formal letter format
2. Include date, recipient details, subject line
3. State facts clearly and chronologically
4. Reference relevant laws/acts when applicable
5. Clearly state the relief or action sought
6. Maintain a firm but respectful tone
7. Include appropriate closing and sender details

Complaint Type: ${type}
Recipient Name: ${recipientName || '[Recipient Name]'}
Recipient Designation: ${recipientDesignation || '[Designation]'}
Sender Name: ${senderName || '[Your Name]'}
Sender Address: ${senderAddress || '[Your Address]'}

Issue Details:
${details || issueDescription}

Relief Sought: ${reliefSought || 'Appropriate action and resolution'}

Generate a complete, ready-to-use complaint letter. Format it properly with clear sections.`

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    prompt: systemPrompt,
  })

  return result.toTextStreamResponse()
}
