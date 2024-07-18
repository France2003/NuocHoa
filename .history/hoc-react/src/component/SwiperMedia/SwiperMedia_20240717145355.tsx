import { media } from "../../data/Media"


const SwiperMedia = () => {
    return (
        <div className="flex justify-evenly w-full">
            {media.map((media) => {
                return (
                    <div className="flex flex-col justify-center items-center">
                        <img width={373} height={210} src={media.img} alt={media.infomation} />
                        <div className="text-center w-[373px] text-[#383838] text-[15px] font-[500] leading-6">
                            <p> {media.infomation} </p>
                            <p className="m-auto w-[60px] h-[3px] bg-[#0000001a]"></p>
                            <p>{media.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SwiperMedia