import { dataProvider } from '@/lib/supabase/dataProvider'
import { DatabaseOutlined } from '@ant-design/icons'
import { ThemedLayoutV2, ThemedSiderV2, ThemedTitleV2 } from '@refinedev/antd'
import { Refine } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router'
import { App as AntdApp } from 'antd'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'
import { Header } from './components/header'
import './index.css'
import { ColorModeContextProvider } from './contexts/color-mode'
import resources from './resources'
import routes from './routes'
import { supabaseClient } from './utils'

const isProduction = import.meta.env.PROD

const App = () => {
  return (
    <RefineKbarProvider>
      <ColorModeContextProvider>
        <AntdApp>
          <RouterProvider router={router} />
        </AntdApp>
      </ColorModeContextProvider>
    </RefineKbarProvider>
  )
}
const RefineProvider = () => {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
      routerProvider={routerProvider}
      resources={resources}
      options={{
        syncWithLocation: true,
        warnWhenUnsavedChanges: true,
        useNewQueryKeys: true,
      }}
    >
      <ThemedLayoutV2
        Title={({ collapsed }) => (
          <ThemedTitleV2 collapsed={collapsed} icon={<DatabaseOutlined />} text="App" />
        )}
        Header={Header}
        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
      >
        <Outlet />
      </ThemedLayoutV2>
      <RefineKbar />
      {isProduction ? <UnsavedChangesNotifier /> : null}
      <DocumentTitleHandler />
    </Refine>
  )
}

const router = createBrowserRouter([
  {
    element: <RefineProvider />,
    children: routes,
  },
])

export default App
