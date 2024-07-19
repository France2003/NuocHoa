
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutClient from './component/LayoutClient'
import PageHome from './pages/PageHome'
import BrandStoryPage from './pages/BrandStoryPage'
import MediaPage from './pages/MediaPage'
import GiaHan from './pages/GiaHan'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutClient/>}>
            <Route index element={<PageHome/>}/>
            <Route path='brandstory' element={<BrandStoryPage/>}/>
            <Route path='media' element={<MediaPage/>}/>
            <Route path='' element={<GiaHan/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
