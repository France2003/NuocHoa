import React from 'react';
import NavbarItem from '../NavItem';
import { Link } from 'react-router-dom';

const NavMenu: React.FC = () => {
  return (
    <div className="relative inline-block group">
        <div>
            <NavbarItem  label="SẢN PHẨM" />
        </div>
        <div className='triangle'>
            
        </div>
      <ul className="navmenu ml-[-20px] mt-[12px] bg-white border-2 absolute w-[260px] text-black">
        <Link to={`/NuocHoa/nam`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d] px-4 block whitespace-no-wrap flex gap-3"> Mùi Hương Dành Cho Nam</li></Link>
        <Link to={`/NuocHoa/nu`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d] py-2 px-4 block whitespace-no-wrap flex gap-3"> Mùi Hương Dành Cho Nữ</li></Link>
        <Link to={`/NuocHoa/nenthom`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3"> Nến Thơm</li></Link>
        <Link to={`/NuocHoa/tinhdau`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3">Tinh Dầu Khuếch Tán</li></Link>
        <Link to={`/NuocHoa/phukien`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3">Thời Trang và Phụ Kiện</li></Link>
        <Link to={`/NuocHoa/mypham`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3">Mỹ Phẩm</li></Link>     
      </ul>
    </div>
  );
};

export default NavMenu;
