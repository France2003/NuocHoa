import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from '../NavItem';

const NavMenu: React.FC = () => {
  return (
    <div className="relative inline-block group">
        <div>
        <Link to={"/"}> <NavbarItem  label="SẢN PHẨM" /> </Link>
        </div>
      <ul className="navmenu ml-[265px] border-2 -mt-2 absolute w-[250px] text-black">
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3">Hot Promotions</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3">Consumer Electronic</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3"> Clothing & Apparel</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3"> Home, Garden & Kitchen</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> Health & Beauty</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3">Jewelry & Watches</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3">Computer & Technology</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> Babies & Moms</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> Sport & Outdoor</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3">Phones & Accessories</li>
       
      </ul>
    </div>
  );
};

export default NavMenu;
