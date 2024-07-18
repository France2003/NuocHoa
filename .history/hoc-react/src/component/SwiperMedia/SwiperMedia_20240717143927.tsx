
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install necessary Swiper modules
// SwiperCore.use([Navigation, Pagination]);

const SwiperMedia = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="swiper-container w-4/5 h-4/5">
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="bg-white flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-md">
                            <img src="/path/to/image1.jpg" alt="Image 1" className="max-w-full rounded-lg" />
                            <h3 className="text-xl font-bold my-4">TOP 5 NOTES HƯƠNG ĐƯỢC ƯA CHUỘNG NHẤT TRONG NGÀNH CÔNG NGHIỆP NƯỚC HOA</h3>
                            <a href="#" className="text-black font-bold hover:underline">XEM CHI TIẾT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="bg-white flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-md">
                            <img src="/path/to/image2.jpg" alt="Image 2" className="max-w-full rounded-lg" />
                            <h3 className="text-xl font-bold my-4">CITY OF SCENT – NHỮNG THÀNH PHỐ KỂ CÂU CHUYỆN MÙI HƯƠNG</h3>
                            <a href="#" className="text-black font-bold hover:underline">XEM CHI TIẾT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="bg-white flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-md">
                            <img src="/path/to/image3.jpg" alt="Image 3" className="max-w-full rounded-lg" />
                            <h3 className="text-xl font-bold my-4">NƯỚC HOA VÀ CUỘC HÀNH TRÌNH LỊCH SỬ ĐẦY RỰC RỠ</h3>
                            <a href="#" className="text-black font-bold hover:underline">XEM CHI TIẾT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="bg-white flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-md">
                            <img src="/path/to/image3.jpg" alt="Image 3" className="max-w-full rounded-lg" />
                            <h3 className="text-xl font-bold my-4">NƯỚC HOA VÀ CUỘC HÀNH TRÌNH LỊCH SỬ ĐẦY RỰC RỠ</h3>
                            <a href="#" className="text-black font-bold hover:underline">XEM CHI TIẾT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="bg-white flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-md">
                            <img src="/path/to/image3.jpg" alt="Image 3" className="max-w-full rounded-lg" />
                            <h3 className="text-xl font-bold my-4">NƯỚC HOA VÀ CUỘC HÀNH TRÌNH LỊCH SỬ ĐẦY RỰC RỠ</h3>
                            <a href="#" className="text-black font-bold hover:underline">XEM CHI TIẾT</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );
};

export default SwiperMedia;
