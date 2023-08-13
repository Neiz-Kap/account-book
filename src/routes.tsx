import MainPage from './pages/MainPage'
import { RouteObject } from './interfaces/index'

export const routes = (isAuth: boolean): RouteObject[] => {
  const publicRoutes: RouteObject[] = [
    {
      path: '/',
      element: <MainPage />,
    },
  ]
  const authRoutes: RouteObject[] = [
    {
      path: '/account-book',
      element: isAuth ? <MainPage /> : <div>Доступ закрыт, авторизируйтесь!</div>,
    },
  ]

  return [...publicRoutes, ...authRoutes]
}
