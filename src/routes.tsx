import { ErrorComponent } from '@refinedev/antd'
import { Outlet } from 'react-router'
import { EntryEdit, EntryList } from './pages/entry'

import { EntrySchema } from '@/shared/zod/EntrySchema'

import type { ZodObject } from 'zod'

const omitList = ['id']

function getKeysFromSchema(schema: ZodObject<any>, omitFields: string[] = omitList) {
  return Object.keys(schema.shape).filter((key) => !omitFields.includes(key))
}

function geneTableFields(schema: ZodObject<any>) {
  return getKeysFromSchema(schema).map((key) => ({
    key,
  }))
}

const routeList = [
  {
    path: 'entry',
    children: [
      { index: true, element: <EntryList fields={geneTableFields(EntrySchema)} /> },
      { path: 'create', element: <EntryEdit /> },
      { path: 'edit/:id', element: <EntryEdit /> },
      { path: 'show/:id', element: <EntryEdit /> },
    ],
  },
  {
    path: '*',
    element: <ErrorComponent />,
  },
]

const routes = routeList.map((route) => {
  const routeRes = { ...route }
  if (route.children) {
    routeRes.children = route.children.map((routeChild) => ({
      ...routeChild,
      element: isEditType(routeChild.path) ? (
        <div className="w-2/3 w-min-96">{routeChild.element}</div>
      ) : (
        routeChild.element
      ),
    }))
  }
  if (route.path !== '*') {
    routeRes.element = <Outlet />
  }
  return routeRes
})

function isEditType(path?: string) {
  if (!path) return false
  return path.includes('edit/') || path === 'create'
}

export default routes
