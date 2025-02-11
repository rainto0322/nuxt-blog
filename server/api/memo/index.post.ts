import { Memos } from "@/models";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    await new Memos(body).save()
    return { ok: true, msg: 'Memo upload successful.' }
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error as string }), { status: 400 })
  }
})