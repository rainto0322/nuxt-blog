import { User } from "@/models";
import { convert_token, verify_token } from "@/utils";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const name = getCookie(event, 'name')
    const token = getCookie(event, 'token')

    if (name && token) {
      const data = await verify_token(name, token)
      return { ok: true, msg: `${data.user.group} ${data.user.name} token login successful.`, user: data.user, token: data.token }
    } else {
      const { name, password } = await readBody(event)
      let user: any = await User.findOne({ name })
      if (!user) throw new Error("Not found this user.")
      const sure = bcrypt.compareSync(password, user.password)

      if (!sure) throw new Error("The password is incorrect.")
      const token = convert_token(user._id)
      const maxAge = 604800
      setCookie(event, 'name', user.name, { sameSite: 'lax', maxAge })
      setCookie(event, 'token', token, { sameSite: 'lax', maxAge })
      return { ok: true, msg: `${user.group} ${user.name} login successful.`, user, token }
    }

  } catch (error) {
    const maxAge = 0
    setCookie(event, 'name', '', { maxAge })
    setCookie(event, 'token', '', { maxAge })
    return new Response(error as string, { status: 401 })
  }
})