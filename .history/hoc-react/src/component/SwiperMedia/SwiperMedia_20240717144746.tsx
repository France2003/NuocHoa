import { media } from "../../data/Media"


const SwiperMedia = () => {
    return (
        <div className="flex justify-evenly w-full">
            {media.map((media) => {
                return (
                    <div className="w-[373px] h-[210px] flex flex-col justify-center items-center">
                        <img src={media.img} alt={media.infomation} />
                        <div className="text-center">
                            <p> {media.infomation} </p>
                            <p>{media.boder}</p>
                            <p>{media.title}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SwiperMedia