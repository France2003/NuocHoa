
import SwiperGallery from '../component/Swiper/SwiperGallery'
import Collection from '../component/Collection/Collection'

const PageHome = () => {
  return (
    <div className='containerHome'>
        <div className='banner mb-[50px]'>
            <SwiperGallery/>
        </div>
        <div className='Collection'>
            <Collection icon={`https://codedeco.art/wp-content/uploads/2023/08/candles_15024cac-99dd-48c4-b923-58c410998c6c.png`} label=''/>
            <Collection icon={''} label=''/>
            <Collection icon={''} label=''/>
            <Collection icon={''} label=''/>
            <Collection icon={''} label=''/>
            <Collection icon={''} label=''/>
        </div>
    </div>
  )
}

export default PageHome