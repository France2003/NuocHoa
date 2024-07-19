import React from 'react';
import NavbarItem from '../NavItem';
import { Link } from 'react-router-dom';

const TraiNghiemMenu: React.FC = () => {
  return (
    <div className="relative inline-block group">
        <div>
            <NavbarItem  label="LAN TỎA HƯƠNG THƠM" />
        </div>
        <div className='triangle'>
            
        </div>
      <ul className="navmenu ml-[-20px] mt-[12px] bg-white border-2 absolute w-[260px] text-black">
        <Link to={`/NuocHoa/gionuochoa`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d] px-4 block whitespace-no-wrap flex gap-3"> Giỏ Nước Hoa By CODEDECO</li></Link>
        <Link to={`/NuocHoa/tnnuochoa`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d] py-2 px-4 block whitespace-no-wrap flex gap-3"> Trải Nghiệm Giỏ Nước Hoa</li></Link>
        <Link to={`/NuocHoa/lantoa`}><li className="bg-white hover:bg-slate-100 hover:text-[#5d5d5d]  py-2 px-4 block whitespace-no-wrap flex gap-3"> Lan Tỏa Hương Thơm Cùng CODEDECO</li>      </Link>
      </ul>
    </div>
  );
};

export default TraiNghiemMenu;
