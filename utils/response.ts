export const Reply = (params: {
  msg?: string
  data?: any
}) => {
  const body = {
    ok: true,
    code: 200,
    msg: params.msg || "Get data successfully.",
  }
  return Object.assign(body, params.data)
}
