import { User } from "@/models";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const { name, password, email } = await readBody(event)
    const empty = await User.findOne({ group: "owner" })
    const user = {
      name,
      password: bcrypt.hashSync(password, 8),
      email,
      group: 'tourist'
    }

    if (empty === null) user.group = "owner"

    const data = await new User(user).save()
    if (data) return {
      ok: true,
      msg: `${user.group} "${user.name}" registration successful.`,
      user: data
    }
  } catch (error) {
    return new Response(error as string, { status: 409 })
  }
})