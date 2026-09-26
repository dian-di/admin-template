/** Set to a specific path (e.g. '/demo') to override the default landing page. */
export const defaultRoute = undefined as string | undefined

export default [
  {
    name: 'demo',
    list: '/demo',
    create: '/demo/create',
    edit: '/demo/edit/:id',
    show: '/demo/show/:id',
    meta: {
      canDelete: true,
    },
  },
]
