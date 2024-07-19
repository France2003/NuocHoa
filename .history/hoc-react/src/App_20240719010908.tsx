
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutClient from './component/LayoutClient'
import PageHome from './pages/PageHome'
import BrandStoryPage from './pages/BrandStoryPage'
import MediaPage from './pages/MediaPage'
import GiaHan from './pages/GiaHan'
import ThaoLy from './pages/ThaoLy'
import NhatVy from './pages/NhatVy'
import ThuThuy from './pages/ThuThuy'
import ThanhPhuong from './pages/ThanhPhuong'
import TyNa from './pages/TyNa'
import ThuyNi from './pages/ThuyNi'
import LienHe from './pages/LienHe'


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
            <Route path='nhatvy' element={<NhatVy/>}/>
            <Route path='thuthuy' element={<ThuThuy/>}/>
            <Route path='thanhphuong' element={<ThanhPhuong/>}/>
            <Route path='tyna' element={<TyNa/>}/>
            <Route path='thuyni' element={<ThuyNi/>}/>
            <Route path='lienhe' element={<LienHe/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
