/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
    {
      path: '/',
      name: 'Login',
      view: 'UserLogin',
      meta: {
        requiresAuth: false
      }
    }
  ]