
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutClient from './component/LayoutClient'
import PageHome from './pages/PageHome'
import BrandStoryPage from './pages/BrandStoryPage'
import GiaHan from './pages/GiaHan'
// import ThaoLy from './pages/ThaoLy'
import NhatVy from './pages/NhatVy'
import ThuThuy from './pages/ThuThuy'
import ThanhPhuong from './pages/ThanhPhuong'
import TyNa from './pages/TyNa'
import ThuyNi from './pages/ThuyNi'
import LienHe from './pages/LienHe'
import CodecoPageDateil from './pages/CodecoPageDateil'
import SellProductPage from './pages/SellProductPage'
import ProductLinePageDetail from './pages/ProductLinePageDetail'
import GioNuocHoa from './pages/GioNuocHoa'
import TraiNghiemGioNuocHoa from './pages/TraiNghiemGioNuocHoa'
import LanToa from './pages/LanToa'
import Nam from './pages/Nam'
import Nu from './pages/Nu'
import NenThom from './pages/NenThom'
import TinhDau from './pages/TinhDau'
import ThoiTrangPhuKien from './pages/TTAndPK'
import MyPham from './pages/MyPham'
import ThaoLy from './pages/ThaoLy'
import MediaPage from './pages/MediaPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/NuocHoa/' element={<LayoutClient/>}>
            <Route index element={<PageHome/>}/>
            <Route path='brandstory' element={<BrandStoryPage/>}/>
            {/* SPham */}
            <Route path='nam' element={<Nam/>}/>
            <Route path='nu' element={<Nu/>}/>
            <Route path='nenthom' element={<NenThom/>}/>
            <Route path='tinhdau' element={<TinhDau/>}/>
            <Route path='phukien' element={<ThoiTrangPhuKien/>}/>
            <Route path='mypham' element={<MyPham/>}/>
            {/* Media */}
            <Route path='media' element={<MediaPage/>}/>
            <Route path='media/giahan' element={<GiaHan/>}/>
            <Route path='media/thaoly' element={<ThaoLy/>}/>
            <Route path='media/nhatvy' element={<NhatVy/>}/>
            <Route path='media/thuthuy' element={<ThuThuy/>}/>
            <Route path='media/thanhphuong' element={<ThanhPhuong/>}/>
            <Route path='media/tyna' element={<TyNa/>}/>
            <Route path='media/thuyni' element={<ThuyNi/>}/>
            {/*  */}
            <Route path='lienhe' element={<LienHe/>}/>
            <Route path='gionuochoa' element={<GioNuocHoa/>}/>
            <Route path='tnnuochoa' element={<TraiNghiemGioNuocHoa/>}/>
            <Route path='lantoa' element={<LanToa/>}/>
            <Route path='codeco/:id' element={<CodecoPageDateil/>}/>
            <Route path='sell/:id' element={<SellProductPage/>}/>
            <Route path='line/:id' element={<ProductLinePageDetail/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
