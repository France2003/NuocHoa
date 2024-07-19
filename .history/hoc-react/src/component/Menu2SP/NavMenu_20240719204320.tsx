import React from 'react';

import NavbarItem from '../NavItem';

const NavMenu: React.FC = () => {
  return (
    <div className="relative inline-block group">
        <div>
            <NavbarItem  label="SẢN PHẨM" />
        </div>
        <div className='triangle'>
            
        </div>
      <ul className="navmenu ml-[-20px] mt-[12px] bg-white border-2 absolute w-[260px] text-black">
        <li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d] px-4 block whitespace-no-wrap flex gap-3"> Mùi Hương Dành Cho Nam</li>
        <li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d] py-2 px-4 block whitespace-no-wrap flex gap-3"> Mùi Hương Dành Cho Nữ</li>
        <li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3"> Nến Thơm</li>
        <li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3">Tinh Dầu Khuếch Tán</li>
        <li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3"> Thời Trang và Phụ Kiện</li>
        <li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3"> Mỹ Phẩm</li>       
      </ul>
    </div>
  );
};

export default NavMenu;
