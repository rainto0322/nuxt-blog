import { Memos } from "@/models";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

  } catch (error) {
    return new Response(error as string, { status: 400 })
  }
})