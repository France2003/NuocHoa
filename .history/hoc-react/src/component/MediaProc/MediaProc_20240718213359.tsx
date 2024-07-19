
type TMediaProc = {
    img: string;
    title: string;
    // content: string
}

const MediaProc = ({ img, title}: TMediaProc) => {
    return (
        <div className="w-full">
            <div className="w-[363px] h-[362]">
                <img width={360} height={171} src={img} alt={title} />
                <p className="text-[#383838] text-[17px] font-[600] uppercase ">{title}</p>
            </div>
        </div>
    )
}

export default MediaProc