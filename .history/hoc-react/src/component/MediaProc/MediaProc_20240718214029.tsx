
type TMediaProc = {
    img: string;
    title: string;
    content: string
}

const MediaProc = ({ img, title, content }: TMediaProc) => {
    return (
        <div className="w-full">
            <div className="w-[363px] h-[362]">
                <img width={360} height={171} src={img} alt={title} />
                <p className="text-[#383838] text-[15px] font-[500] uppercase ">{title}</p>
                <p className="text-[#2d2d2d] text-[14.5px] leading-6 ">{content}</p>
            </div>
        </div>
    )
}

export default MediaProc