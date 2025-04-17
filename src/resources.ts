export default [
  {
    name: 'entry',
    list: '/entry',
    create: '/entry/create',
    edit: '/entry/edit/:id',
    show: '/entry/show/:id',
    meta: {
      canDelete: true,
    },
  },
]
