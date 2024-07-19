
type TMediaProc={
    img:string;
    title:string;
    content:string
}

const MediaProc = ({img, title, content}:TMediaProc) => {
  return (
    <div className="w-full">
        <img width={360} height={171} src={img} alt={title} />
        <p className="text-[#383838]">{title}</p>
        <p>{content}</p>
    </div>
  )
}

export default MediaProc