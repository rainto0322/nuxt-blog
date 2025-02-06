import { Memos } from "@/models";
import { Reply } from "@/utils";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    await new Memos(body).save()
    return Reply({ msg: 'Memo upload successful.' })
  } catch (error) {
    return new Response(error as string, { status: 400 })
  }
})