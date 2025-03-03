import { Album } from "@/models";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const data = await new Album(body).save()
    console.log(data);
    return { ok: true, msg: `Image ${body.name} upload successful.` }

  } catch (error) {
    return { ok: false, msg: `Image ${body.name} upload failed.` }
  }
})