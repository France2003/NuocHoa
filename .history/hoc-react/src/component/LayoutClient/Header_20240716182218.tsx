import { Link } from "react-router-dom"
import NavbarItem from "../NavItem"
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import NavMenu from "../Menu2SP/NavMenu";
const Header = () => {
    return (
        <div className="container_Header">
            <div className="Header ">
                <div className="Title_header bg-[#404040] p-[5px] w-full">
                    <span className="flex gap-1 justify-center items-center text-[#FFFF]">
                        <b className=" font-medium text-sm">codedeco</b> <p>-</p> <p className=" text-sm">  tạo dựng thương hiệu tinh dầu chất lượng và cam kết bảo hành đến giọt hương cuối cùng.</p>
                    </span>
                </div>
                <div className="Menu w-full bg-black flex justify-evenly items-center p-[5px] fixed top-0 left-0 z-50">
                    <div className="logo">
                        <img src="https://codedeco.art/wp-content/uploads/2023/03/logo-1-2.png" width={183} height={58} alt="" />
                    </div>
                    <nav className="text-lg">
                        <ul className="flex justify-center items-center  gap-4">
                            <li className="flex justify-center items-center text-white ">
                                <Link to={"/"}> <NavbarItem type="nav-active" label="CÂU CHUYỆN THƯƠNG HIỆU" /> </Link>
                                <p className="boder">|</p>
                            </li>
                            <li className="flex justify-center items-center text-white">
                                <div className="navMenu z-10 ">
                                    <NavMenu />
                                </div>
                                <p className="boder">|</p>
                            </li>
                            <li className="flex justify-center items-center text-white">
                                <Link to={"/"}> <NavbarItem label="PHƯƠNG TIỆN TRUYỀN THÔNG" /> </Link>
                                <p className="boder">|</p>
                            </li>
                            <li>
                                <Link to={"/"}> <NavbarItem label="LIÊN HỆ" /> </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="search flex items-center">
                        <input type="text" className="w-[180px] text-sm p-[4px] text-white ml-[3px] rounded-xl bg-[#353535] outline-none placeholder:text-[12px] placeholder:text-white placeholder:px-[3px] placeholder:" placeholder="Tìm kiếm sản phẩm" />
                        <FaSearch className="text-white absolute right-[180px] " />
                    </div>
                    <div className="cart flex items-center">
                        <FaShoppingBag className="text-white text-2xl absolute right-[100px]" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header