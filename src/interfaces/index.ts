import { ReactNode } from "react"

export interface RouteObject {
  path: string
  element: ReactNode
  caseSensitive?: boolean
  children?: RouteObject[]
  index?: false
}
