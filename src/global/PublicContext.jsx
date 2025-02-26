import { createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const HomeContext = createContext()

// const useData = useContext(HomeContext)

// eslint-disable-next-line react/prop-types
const PublicContext = ({children}) => {
  const values = {
    mode:"dark",
    cart:[],
    chioma:"sleeping"
  }
  return (
    <HomeContext.Provider value={values}>
      {children}
    </HomeContext.Provider>
  )
}

export default PublicContext