import process from "node:process";
import jwt from "jsonwebtoken";
import { ErrorReply } from "./response";
import { User } from "@/models";
const SECRET = process.env.SECRET || "rain"

export const convert_token = (payload: string) => {
  return jwt.sign({ id: payload.toString() }, SECRET, { expiresIn: '7d' })
}

export async function verify_token(name: string, token: string) {
  const user: any = await User.findOne({ name })
  if (!user) throw new Error("Token not legal.")
  const data: any = jwt.verify(token, SECRET, (err, decoded) => {
    if (err) throw new Error("Token has expired");
    return decoded
  })

  if (data.id) {
    const condition = data.id === user._id.toString()
    if (!condition) throw new Error('Token invalid')
  }
  return {
    user,
    token: convert_token(user._id)
  }
}

export async function Permission(event: any) {
  // const name = getCookie(event, 'name') || 0
  // const token = getCookie(event, 'token') || 0
  // if (!name || !token) throw new Error('token no legal')
  try {
    await verify_token("123", "456")
  } catch (error) {
    event.respondWith(new Response(error as string, { status: 403 }))
  }
}