
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutClient from './component/LayoutClient'
import PageHome from './pages/PageHome'
import BrandStoryPage from './pages/BrandStoryPage'
import MediaPage from './pages/MediaPage'
import GiaHan from './pages/GiaHan'
import ThaoLy from './pages/ThaoLy'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutClient/>}>
            <Route index element={<PageHome/>}/>
            <Route path='brandstory' element={<BrandStoryPage/>}/>
            <Route path='media' element={<MediaPage/>}/>
            <Route path='giahan' element={<GiaHan/>}/>
            <Route path='thaoly' element={<ThaoLy/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
