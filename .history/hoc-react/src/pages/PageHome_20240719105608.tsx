
import SwiperGallery from '../component/Swiper/SwiperGallery'
import Collection from '../component/Collection/Collection'
import { MdNavigateNext } from "react-icons/md";
import ProductCodeco from '../component/productCodeco/productCodeco';
import SellingProduct from '../component/SellingProduct/SellingProduct';
import ProductLine from '../component/ProductLine/ProductLine';
import SwiperMedia from '../component/SwiperMedia/SwiperMedia';
import CommentCarousel from '../component/CommentCarousel/CommentCarousel';
import { Helmet } from 'react-helmet';
const PageHome = () => {
    return (
        <div className='containerHome'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='banner mb-[50px]'>
                <SwiperGallery />
            </div>
            <div className='w-full Collection '>
                <p className='text-[#383838] text-[25.6px] font-[600] text-center'>BỘ SƯU TẬP SẢN PHẨM</p>
                <div className=' flex justify-around mx-[60px] items-center my-5'>
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/candles_15024cac-99dd-48c4-b923-58c410998c6c.png' label='NẾN THƠM' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/z4598625008711_63fe5c534d50d7a81d1254becb36bcf7.jpg' label='THỜI TRANG – PHỤ KIỆN' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/z4596161509567_eb2bf138845be818e13391a25fea25c2.jpg' label='SET QUÀ TẶNG' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/fragrances_b27409b5-59ea-4617-b08d-6442fa975168.png' label='TINH DẦU NƯỚC HOA' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/z4596159995104_7a5534e5f638a2eb564c460098f26af1.jpg' label='TINH DẦU KHUẾCH TÁN' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/09/z4677799080433_de37e103261dc9021e1f076f0a31d8d1.jpg' label='MỸ PHẨM' />
                </div>
            </div>
            <div className='codedeco'>
                <div className=' w-full flex items-center justify-around gap-[5px]'>
                    <div>
                        <img src="https://codedeco.art/wp-content/uploads/2023/05/DSC_9623-1536x1022.jpg" alt="" width={552} height={434} />
                    </div>
                    <div className='w-[650px] flex flex-col leading-8 gap-2 bg-[#FAF9F5] '>
                        <h2 className='text-center inline text-[1.8em] font-[600] text-[#383838]'>CODEDECO</h2>
                        <h3 className='text-center inline text-[1.4em] font-[600] text-[#383838] tracking-wider'>CÂU CHUYỆN THƯƠNG HIỆU</h3>
                        <p className='text-center text-[15.2px]'>Tạo dựng thương hiệu tinh dầu chất lượng với giá thành hợp lý,
                            mang đến cho bạn không gian sống thư giãn mỗi ngày.
                            Chúng tôi cam kết bảo hành đến giọt hương cuối cùng an toàn và chất lượng nhất.</p>
                        <p className='text-center text-[15.2px]'>Phù hợp với những người có cuộc sống năng động, bận rộn, di chuyển nhiều.
                            Hơn thế nữa, CODEDECO với mùi hương phong phú, độc đáo và mới mẻ giúp thỏa mãn cá tính người dùng khó tính nhất nhưng với một mức giá dễ tiếp cận cho nhiều người.
                            Chúng tôi gửi gắm vào từng sản phẩm với thông điệp “mỗi gói hàng như một gói quà”.</p>
                        <button className='ChiTiet flex items-center justify-center gap-1'> XEM CHI TIẾT <MdNavigateNext /> </button>
                    </div>
                </div>
                <div className='productCodeco mt-[60px]'>
                    <ProductCodeco />
                </div>
            </div>
            {/*  */}
            <div className='SellingProduct mt-[70px] '>
                <div className='bg-[#FAF9F5] w-full p-[15px] h-[130px] pt-[40px] '>
                    <h1 className='text-center text-[#383838] text-[26px] font-[500]'>SẢN PHẨM BÁN CHẠY</h1>
                    <p className=' m-auto w-[60px] h-[3px] bg-[#7E7E7E]' />
                </div>
                <div className='mt-[50px]'>
                    <SellingProduct />
                </div>
            </div>
            {/*  */}
            <div className='ProductLine mt-[70px] '>
                <div className='bg-[#FAF9F5] w-full p-[15px] h-[130px] pt-[40px] '>
                    <h1 className='text-center text-[#383838] text-[26px] font-[500]'>CÁC DÒNG SẢN PHẨM</h1>
                    <p className=' m-auto w-[60px] h-[3px] bg-[#7E7E7E]' />
                </div>
                <div className='mt-[50px]'>
                    <ProductLine />
                </div>
            </div>
            {/*  */}
            <div className='ProductLine mt-[70px] '>
                <div className='bg-[#FAF9F5] w-full p-[15px] h-[130px] pt-[40px] '>
                    <h1 className='text-center text-[#383838] text-[26px] font-[500]'>PHƯƠNG TIỆN TRUYỀN THÔNG</h1>
                    <p className=' m-auto w-[60px] h-[3px] bg-[#7E7E7E]' />
                </div>
                <div className='mt-[50px]'>
                    <SwiperMedia />
                </div>
            </div>
            {/*  */}
            <div className='ShareAndConnect mt-9'>
                <img src="https://codedeco.art/wp-content/uploads/2024/02/Black-And-White-Classic-Ramadan-Charity-Landscape-Banner-2701-x-986-px-1-2048x748.jpg" alt="" />
            </div>
            {/*  */}
            <div className='CODEDECO_ZONE  '>
                <div className=' w-full p-[15px] h-[130px] pt-[40px] '>
                    <h1 className='text-center text-[#383838] text-[26px] font-[500]'>CODEDECO ZONE</h1>
                    <p className=' m-auto mt-2 w-[60px] h-[2px] bg-[#7E7E7E]' />
                </div>
                <div className='mt-[-5px]'>
                    <CommentCarousel/>
                </div>
            </div>
            {/*  */}
            
        </div>
    )
}

export default PageHome