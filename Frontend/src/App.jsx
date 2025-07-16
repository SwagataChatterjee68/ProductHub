import Navbar from "./components/Navbar"
import MainRoute from "./routes/MainRoute"
import { asyncLoggedInUser } from "./store/actions/UserAction"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { asyncLoadProduct } from "./store/actions/ProductAction"
import Footer from "./components/Footer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLoggedInUser())
    dispatch(asyncLoadProduct())
  }, [])

  return (
    <div>

      <Navbar />
      <MainRoute />
      <Footer/>
    </div>
  )
}

export default App
