
type TMediaProc={
    img:string;
    title:string;
    content:string
}

const MediaProc = ({img, title, content}:TMediaProc) => {
  return (
    <div className="w-full">
        <img src={img} alt={title} />
        <p>{title}</p>
        <p>{content}</p>
    </div>
  )
}

export default MediaProc