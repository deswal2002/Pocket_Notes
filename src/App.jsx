import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePges/HomePage"
import NotePage from "./Pages/NotePage/NotePage"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/notes" element={<NotePage />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
