import MediaProc from "../component/MediaProc/MediaProc"
import img1 from'../../public/img/Img1.png'
import img2 from'../../public/img/img2.jpg'
import img3 from'../../public/img/Img3.png'
import img4 from'../../public/img/img4.png'
import img5 from'../../public/img/img5.jpg'
import img6 from'../../public/img/img6.jpg'
import img7 from'../../public/img/img7.png'
const MediaPage = () => {
  return (
    <div className="container_Brand w-full mt-44 m-auto ">
        <MediaProc img={img1} title="" content=""/>
        <MediaProc img={img2} title="" content=""/>
        <MediaProc img={img3} title="" content=""/>
        <MediaProc img="" title="" content=""/>
        <MediaProc img="" title="" content=""/>
        <MediaProc img="" title="" content=""/>
        <MediaProc img="" title="" content=""/>
    </div>
  )
}

export default MediaPage