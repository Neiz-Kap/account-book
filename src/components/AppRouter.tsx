import { routes } from '../routes'
import { useRoutes } from 'react-router-dom'

const AppRouter = () => {
  const isAuth = false
  const routers = routes(isAuth)
  const pages = useRoutes(routers)

  return pages
}

export default AppRouter
