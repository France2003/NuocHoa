import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from '../NavItem';

const NavMenu: React.FC = () => {
  return (
    <div className="relative inline-block group">
        <div>
            <Link to={"/"}> <NavbarItem  label="SẢN PHẨM" /> </Link>
        </div>
        <div className='triangle'>
            
        </div>
      <ul className="navmenu ml-[-20px] mt-[12px] border-2 absolute w-[260px] text-black">
        <li className="bg-white hover:bg-slate-100 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3">Phiên Bản Tết 2024</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3">Set Quà Tặng</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3"> Mùi Hương Dành Cho Nam</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3"> Mùi Hương Dành Cho Nữ</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> Nến Thơm</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3">Mẫu Thử Trải Nghiệm</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3">Tinh Dầu Khuếch Tán</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> Thời Trang và Phụ Kiện</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> Mỹ Phẩm</li>       
      </ul>
    </div>
  );
};

export default NavMenu;
