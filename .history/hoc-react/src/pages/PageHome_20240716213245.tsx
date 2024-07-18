
import SwiperGallery from '../component/Swiper/SwiperGallery'
import Collection from '../component/Collection/Collection'

const PageHome = () => {
    return (
        <div className='containerHome'>
            <div className='banner mb-[50px]'>
                <SwiperGallery />
            </div>
            <div className='w-full'>
                <p className='text-[#383838] text-[25.6px] font-[600] text-center'>BỘ SƯU TẬP SẢN PHẨM</p>
                <div className='Collection flex justify-around mx-5 items-center my-5'>
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/candles_15024cac-99dd-48c4-b923-58c410998c6c.png' label='NẾN THƠM' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/z4598625008711_63fe5c534d50d7a81d1254becb36bcf7.jpg' label='THỜI TRANG – PHỤ KIỆN' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/z4596161509567_eb2bf138845be818e13391a25fea25c2.jpg' label='SET QUÀ TẶNG' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/fragrances_b27409b5-59ea-4617-b08d-6442fa975168.png' label='TINH DẦU NƯỚC HOA' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/08/z4596159995104_7a5534e5f638a2eb564c460098f26af1.jpg' label='TINH DẦU KHUẾCH TÁN' />
                    <Collection img='https://codedeco.art/wp-content/uploads/2023/09/z4677799080433_de37e103261dc9021e1f076f0a31d8d1.jpg' label='MỸ PHẨM' />
                </div>
            </div>
        </div>
    )
}

export default PageHome