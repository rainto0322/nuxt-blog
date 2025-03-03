import { Memos } from "@/models";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string
    const data = await Memos.findById(id)
    console.log(data);
    
    return { ok: true, data }
  } catch (error) {
    return new Response(error as string, { status: 400 })
  }
})