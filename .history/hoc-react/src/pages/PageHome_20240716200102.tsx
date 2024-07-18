
import SwiperGallery from '../component/Swiper/SwiperGallery'
import Collection from '../component/Collection/Collection'

const PageHome = () => {
  return (
    <div className='containerHome'>
        <div className='banner mb-[50px]'>
            <SwiperGallery/>
        </div>
        <div className='Collection'>
            <Collection icon={''} label=''/>
            <Collection icon={} label=''/>
            <Collection icon={} label=''/>
            <Collection icon={} label=''/>
            <Collection icon={} label=''/>
            <Collection icon={} label=''/>
        </div>
    </div>
  )
}

export default PageHome