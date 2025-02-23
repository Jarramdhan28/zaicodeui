import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import ComponentDetail from './pages/ComponentDetail'
import Components from './pages/Components'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/components" element={<Components/>}></Route>
          <Route path="/component/:id" element={<ComponentDetail/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
