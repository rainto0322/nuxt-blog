interface ApiResponse {
  msg: string
  ok: boolean
}
export async function useReply<T>(url: string, option: any) {
  try {
    const data:any = await $fetch<T>(`/api/${url}`, option)
    useToast().add({ title: data.msg })
    if(data) return data
  } catch (error) {
    useToast().error({ title: error })
  }
}