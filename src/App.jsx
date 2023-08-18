import Login from "./pages/Login"
import NavBar from './components/NavBar'
import ChatRoom from "./pages/ChatRoom"
import { Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./routes/PrivateRoutes"
import { AuthProvider } from "./context/AuthContexts"

function App() {

  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/chat" element={<PrivateRoutes><ChatRoom/></PrivateRoutes>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
