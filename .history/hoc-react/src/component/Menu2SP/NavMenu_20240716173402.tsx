import React from 'react';
import { IoMenuOutline, IoDiamondOutline, IoBookOutline } from "react-icons/io5";
import { CiStar, CiHeart, CiPillsBottle1 } from "react-icons/ci";
import { FaMobileAlt, FaCar } from "react-icons/fa";
import { MdElectricBolt, MdOutlineSportsFootball, MdOutlineDiscount } from "react-icons/md";
import { PiTShirtLight } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { HiOutlineWrench } from "react-icons/hi2";
import { BsLamp } from "react-icons/bs";
import './NavMenu.css';
import { Link } from 'react-router-dom';
import NavbarItem from '../NavItem';

const NavMenu: React.FC = () => {
  return (
    <div className="relative inline-block group">
        <div>
        <Link to={"/"}> <NavbarItem  label="SẢN PHẨM" /> </Link>
        </div>
      <ul className="navmenu ml-[-235px] border-2 -mt-2 absolute w-[250px] text-black">
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3">Hot Promotions</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3">Consumer Electronic</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3"> Clothing & Apparel</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white py-2 px-4 block whitespace-no-wrap flex gap-3"> Home, Garden & Kitchen</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> Health & Beauty</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3">Jewelry & Watches</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"><RiComputerLine className='text-xl'/> Computer & Technology</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> <CiPillsBottle1 className='text-xl'/> Babies & Moms</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> <MdOutlineSportsFootball className='text-xl'/> Sport & Outdoor</li>
        <li className="bg-white hover:bg-blue-700 hover:text-white  py-2 px-4 block whitespace-no-wrap flex gap-3"> <FaMobileAlt className='text-xl'/> Phones & Accessories</li>
       
      </ul>
    </div>
  );
};

export default NavMenu;
