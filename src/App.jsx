import { useContext } from "react"
import  { HomeContext } from "./global/PublicContext"


const App = () => {
  const {mode} = useContext(HomeContext)
  console.log(mode)
  return (
    <div>App</div>
  )
}

export default App