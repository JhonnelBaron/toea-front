// middleware/auth.js
// export default defineNuxtRouteMiddleware((to) => {
//   const token = useCookie('auth_token')

//   if (!token.value && to.meta.requiresAuth) {
//     return navigateTo('/login')
//   }

//   if (token.value && to.meta.guestOnly) {
//     return navigateTo('/')
//   }
// })
import { roleRoutes } from '~/utils/roleRoutes'

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('auth_token').value

  // If no token → guest
  if (!token) {
    if (to.meta.requiresAuth) return navigateTo('/login')
    return
  }

  let userType
  try {
    // Manually decode JWT payload
    const payload = token.split('.')[1] // get the middle part
    const decodedPayload = JSON.parse(atob(payload))
    userType = decodedPayload.user_type
  } catch (e) {
    console.error('Invalid token', e)
    useCookie('auth_token').value = null
    return navigateTo('/login')
  }

  const redirectPath = roleRoutes[userType] || '/login'

  // Guest-only page
  if (to.meta.guestOnly && to.path !== redirectPath) {
    return navigateTo(redirectPath)
  }

  // Protected page, prevent access to wrong role
  if (to.meta.requiresAuth && to.path !== redirectPath) {
    return navigateTo(redirectPath)
  }
})
