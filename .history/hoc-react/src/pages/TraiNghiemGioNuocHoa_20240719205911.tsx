import img10 from '../../public/img/img10.png'
import img11 from '../../public/img/img11.png'
const TraiNghiemGioNuocHoa = () => {
  return (
    <div className="mt-32 mb-5 w-[1120px]  flex justify-around flex-col  m-auto leading-7">
        <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>Trải nghiệm GIỎ NƯỚC HOA by CODEDECO cùng các KOLs, Influencers</h1>
        <div className='mx-9 mt-4'>
            <img className="h-[470px] w-[1050px]" src={img10} alt="" />
            <p>Với sự kết hợp đầy sáng tạo giữa giỏ hoa và nước hoa sẽ mang đến cho bạn nhiều trải nghiệm mới. 
                Vừa được nước hoa, vừa được tặng hoa khiến cho bạn như được nâng niu, bởi mỗi chúng ta đều xứng đáng được yêu thương như những 
                bông hoa.</p>
            <p className="mt-5 mb-3">Hãy cùng chúng tôi - CODEDECO cùng nhau thực hiện chiến dịch <b>“Hương thơm tạo nên sự hấp dẫn của bạn”</b></p>
            <img className="h-[470px] w-[1050px]" src={img11} alt="" />
        </div>
    </div>
  )
}

export default TraiNghiemGioNuocHoa