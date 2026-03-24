import { SignJWT, jwtVerify } from 'jose'

// Mock database (In-memory for demonstration)
// In production, use Prisma/Drizzle with a real DB
export const users: any[] = []

const secretKey = 'super-secret-key-change-in-production'
const key = new TextEncoder().encode(secretKey)

export async function signToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key)
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, key)
    return payload
  } catch (error) {
    return null
  }
}
