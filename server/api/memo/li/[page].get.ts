import { Memos } from "@/models";
import { Reply } from "@/utils";

export default defineEventHandler(async (event) => {
  try {
    let page = event.context.params?.id as string
    let pageNumber = Number(page), size = 8
    const data = await Memos.find()
      .sort({ date: -1 })
      .skip(pageNumber * size)
      .limit(size).lean()

    if (data.length <= 0) return new Response("Not found moment.", { status: 404 })
    const count = await Memos.countDocuments()
    const max = Math.ceil(count / size)
    return { ok: true, data, max, count }

  } catch (error) {
    return new Response(error as string, { status: 400 })
  }
})