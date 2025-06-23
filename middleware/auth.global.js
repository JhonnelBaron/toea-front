export default defineNuxtRouteMiddleware((to, from) => {
  const userToken = process.client ? localStorage.getItem('auth_token') : null

  if (!userToken && to.meta.requiresAuth) {
    // Not logged in but trying to access a protected page
    return navigateTo('/login')
  }

  if (userToken && to.meta.guestOnly) {
    // Logged in but trying to access guest-only page (login/register)
    return navigateTo('/')
  }
})
