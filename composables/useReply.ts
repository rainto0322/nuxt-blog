interface ApiResponse {
  msg: string
  ok: boolean
}
export async function useReply<T>(url: string, option?: any) {
  try {
    const data: any = await $fetch<T>(`/api/${url}`, option)
    if (data.ok) {
      useToast().add({ title: data.msg })
      return data
    } else {
      useToast().error({ title: data.msg })
    }
  } catch (error) {
    useToast().error({ title: error })
  }
}