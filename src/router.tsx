import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: '/',
  },
]

const router = createBrowserRouter([...privateRoutes, ...publicRoutes])

export const Router = () => {
  return <RouterProvider router={router} />
}
