
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { media } from '../../data/Media';

// Install necessary Swiper modules
// SwiperCore.use([Navigation, Pagination]);

const SwiperMedia = () => {
    return (
        <div className="flex justify-center items-center">
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
                        {
                            media.map((mediaitem)=>{
                                return(
                                    <div>
                                        <img width={250} height={200} src={mediaitem.img} alt={mediaitem.infomation} />
                                        <p>{mediaitem.infomation}</p>
                                        <p>{mediaitem.boder}</p>
                                        <p>{mediaitem.title}</p>
                                    </div>
                                )
                            })
                        }
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
