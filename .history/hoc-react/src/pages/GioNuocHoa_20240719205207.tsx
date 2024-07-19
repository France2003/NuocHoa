import MediaProc from "../component/MediaProc/MediaProc"
import img8 from '../../public/img/img8.png'
import img9 from '../../public/img/img8.png'
const GioNuocHoa = () => {
  return (
    <div className="mt-32 mb-5 w-[1120px]  flex justify-around flex-col  m-auto leading-7">
        <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>GIỎ NƯỚC HOA by CODEDECO</h1>
        <div>
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <p></p>
        </div>
    </div>
  )
}

export default GioNuocHoa