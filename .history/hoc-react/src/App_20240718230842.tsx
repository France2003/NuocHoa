
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutClient from './component/LayoutClient'
import PageHome from './pages/PageHome'
import BrandStoryPage from './pages/BrandStoryPage'
import MediaPage from './pages/MediaPage'
import GiaHan from './pages/GiaHan'
import ThuThuy from './pages/ThuThuy'


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
            <Route path='thuthuy' element={<ThuThuy/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
