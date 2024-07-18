import { Link } from "react-router-dom"
import NavbarItem from "../NavItem"
import { FaSearch,FaShoppingBag } from "react-icons/fa";
const Header = () => {
    return (
        <div className="container_Header">
            <div className="Header">
                <div className="Title_header bg-[#404040] p-[5px] w-full">
                    <span className="flex gap-1 justify-center items-center text-[#FFFF]">
                        <b className=" font-medium text-sm">codedeco</b> <p>-</p> <p className=" text-sm">  tạo dựng thương hiệu tinh dầu chất lượng và cam kết bảo hành đến giọt hương cuối cùng.</p>
                    </span>
                </div>
                <div className="Menu w-full bg-black flex justify-around items-center">
                    <div className="logo">
                        <img src="https://codedeco.art/wp-content/uploads/2023/03/logo-1-2.png" width={183} height={58} alt="" />
                    </div>
                    <nav>
                        <ul className="flex">
                            <li>
                                <Link to={"/"}> <NavbarItem type="nav-active" label="CÂU CHUYỆN THƯƠNG HIỆU" /> </Link>
                            </li>
                            <li>
                                <Link to={"/"}> <NavbarItem  label="SẢN PHẨM" /> </Link>
                            </li>
                            <li>
                                <Link to={"/"}> <NavbarItem label="PHƯƠNG TIỆN TRUYỀN THÔNG" /> </Link>
                            </li>
                            <li>
                                <Link to={"/"}> <NavbarItem label="LIÊN HỆ" /> </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="search">
                        <input type="text" /> <FaSearch className="text-white"/>
                    </div>
                    <div className="cart">
                        <FaShoppingBag className="text-white"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header