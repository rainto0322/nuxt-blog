import { Memos } from "@/models";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string
    const body = await readBody(event)
    const data = await Memos.findByIdAndUpdate(id, body, { new: true })
    return { ok: true, data, msg: 'Modified successfully.' }
  } catch (error) {
    return new Response(error as string, { status: 400 })
  }
})