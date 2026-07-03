import { ErrorComponent } from '@refinedev/antd'
import { Navigate, Outlet } from 'react-router'
import type { ZodObject } from 'zod'
import { DemoEdit, DemoList } from './pages/demo'
import resources, { defaultRoute } from './resources'
import { DemoSchema } from './shared/zod/DemoSchema'

const omitList = ['id']

function getKeysFromSchema(schema: ZodObject<any>, omitFields: string[] = omitList) {
  return Object.keys(schema.shape).filter((key) => !omitFields.includes(key))
}

function geneTableFields(schema: ZodObject<any>) {
  return getKeysFromSchema(schema).map((key) => ({ key }))
}

const homePath = defaultRoute ?? resources[0]?.list ?? '/'

const routeList = [
  {
    path: '/',
    element: <Navigate to={homePath} replace />,
  },
  {
    path: 'demo',
    children: [
      { index: true, element: <DemoList fields={geneTableFields(DemoSchema)} /> },
      { path: 'create', element: <DemoEdit /> },
      { path: 'edit/:id', element: <DemoEdit /> },
      { path: 'show/:id', element: <DemoEdit /> },
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
        <div className='w-2/3 w-min-96'>{routeChild.element}</div>
      ) : (
        routeChild.element
      ),
    }))
  }
  if (route.path !== '*' && route.children) {
    routeRes.element = <Outlet />
  }
  return routeRes
})

function isEditType(path?: string) {
  if (!path) return false
  return path.includes('edit/') || path === 'create'
}

export default routes
