// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const name = useCookie("name")
  const token = useCookie("token")
  if (to.path.includes('/admin')) {
    if (!name.value || !token.value) {
      return navigateTo('/login');
    }
  }
})
