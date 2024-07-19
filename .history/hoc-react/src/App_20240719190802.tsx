
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
import CodecoPageDateil from './pages/CodecoPageDateil'
import SellProductPage from './pages/SellProductPage'
import ProductLinePageDetail from './pages/ProductLinePageDetail'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/NuocHoa/' element={<LayoutClient/>}>
            <Route index element={<PageHome/>}/>
            <Route path='brandstory' element={<BrandStoryPage/>}/>
            <Route path='media' element={<MediaPage/>}/>
            <Route path='media/giahan' element={<GiaHan/>}/>
            <Route path='media/thaoly' element={<ThaoLy/>}/>
            <Route path='media/nhatvy' element={<NhatVy/>}/>
            <Route path='media/thuthuy' element={<ThuThuy/>}/>
            <Route path='media/thanhphuong' element={<ThanhPhuong/>}/>
            <Route path='media/tyna' element={<TyNa/>}/>
            <Route path='media/thuyni' element={<ThuyNi/>}/>
            <Route path='lienhe' element={<LienHe/>}/>
            <Route path='codeco' element={<CodecoPageDateil id={1} key={1}/>}/>
            <Route path='sell' element={<SellProductPage id={1}/>}/>
            <Route path='line' element={<ProductLinePageDetail id={1}/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
