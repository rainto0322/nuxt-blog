interface ApiResponse {
  msg: string
  ok: boolean
}
export async function useFeh(url: string, option: any) {
  await $fetch<ApiResponse>(`/api/${url}`, option).then((data) => {
    // const toast = useToast()
    return data
  }).catch((error) => {
    console.log(error);
  })

}