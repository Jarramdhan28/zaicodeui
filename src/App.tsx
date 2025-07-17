import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComponentDetail from './pages/ComponentDetail'
import Components from './pages/Components'
import NotFound from './pages/404'
import Templates from './pages/Templates.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/components' element={<Components />}></Route>
        <Route
          path='/components/:category'
          element={<ComponentDetail />}
        ></Route>
        <Route path='/templates' element={<Templates />} />
      </Routes>
    </Router>
  )
}

export default App
