import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComponentDetail from './pages/tailwind/TailwindComponentDetail.tsx'
import Components from './pages/tailwind/TailwindComponents.tsx'
import NotFound from './pages/404'
import Templates from './pages/Templates.tsx'
import AlpineComponents from './pages/alpine/AlpineComponents.tsx'
import AlpineComponentDetail from './pages/alpine/AlpineComponentDetail.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tailwindui-components' element={<Components />}></Route>
        <Route
          path={'/alpine-components'}
          element={<AlpineComponents />}
        ></Route>
        <Route
          path='/tailwindui-components/:category'
          element={<ComponentDetail />}
        ></Route>
        <Route
          path='/alpine-components/:category'
          element={<AlpineComponentDetail />}
        ></Route>
        <Route path='/templates' element={<Templates />} />
      </Routes>
    </Router>
  )
}

export default App
