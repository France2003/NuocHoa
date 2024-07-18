
import SwiperGallery from '../component/Swiper/SwiperGallery'
import Collection from '../component/Collection/Collection'

const PageHome = () => {
    return (
        <div className='containerHome'>
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
            <div className='codedeco w-full flex items-center justify-around gap-[5px]'>
                <div>
                    <img src="https://codedeco.art/wp-content/uploads/2023/05/DSC_9623-1536x1022.jpg" alt="" width={552} height={434} />
                </div>
                <div className='w-[650px] '>
                    <h2 className='text-center'>CODEDECO</h2>
                    <h3 className='text-center'>CÂU CHUYỆN THƯƠNG HIỆU</h3>
                    <p className='text-center text-[15.2px]'>Tạo dựng thương hiệu tinh dầu chất lượng với giá thành hợp lý,
                        mang đến cho bạn không gian sống thư giãn mỗi ngày.
                        Chúng tôi cam kết bảo hành đến giọt hương cuối cùng an toàn và chất lượng nhất.</p>
                    <p className='text-center text-[15.2px]'>Phù hợp với những người có cuộc sống năng động, bận rộn, di chuyển nhiều.
                        Hơn thế nữa, CODEDECO với mùi hương phong phú, độc đáo và mới mẻ giúp thỏa mãn cá tính người dùng khó tính nhất nhưng với một mức giá dễ tiếp cận cho nhiều người.
                        Chúng tôi gửi gắm vào từng sản phẩm với thông điệp “mỗi gói hàng như một gói quà”.</p>
                    <button> XEM CHI TIẾT </button>
                </div>
            </div>
        </div>
    )
}

export default PageHome