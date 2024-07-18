import { media } from "../../data/Media"


const SwiperMedia = () => {
  return (
    <div className="flex justify-evenly mx-auto w-full">
        {media.map((media)=>{
            return(
                <div className="w-[300px] h-[350px] flex flex-col justify-center items-center">
                    <img src="" alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default SwiperMedia