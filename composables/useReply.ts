interface ApiResponse {
  msg: string
  ok: boolean
}
export async function useReply(url: string, option: any) {
  await $fetch<ApiResponse>(`/api/${url}`, option).then((data) => {
    useToast().add({ title: data.msg })
    return data
  }).catch((error) => {
    useToast().add({ title: error })
  })

}