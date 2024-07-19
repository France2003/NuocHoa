import img10 from '../../public/img/img10.png'
import img11 from '../../public/img/img11.png'
const TraiNghiemGioNuocHoa = () => {
  return (
    <div className="mt-32 mb-5 w-[1120px]  flex justify-around flex-col  m-auto leading-7">
        <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>Trải nghiệm GIỎ NƯỚC HOA by CODEDECO cùng các KOLs, Influencers</h1>
        <div className='mx-9 mt-4'>
            <img className="h-[300px] w-[300px]" src={img10} alt="" />
            <p>Các Influencers và Tiktoker sẽ quay video ngắn unbox GIỎ NƯỚC HOA by CODEDECO và review về box quà cũng như mùi hương mà CODEDECO mang tới cùng hastag <span className='p-[3px] bg-black text-white'>#gionuochoabycodedeco</span> </p>
          
            <img className="h-[300px] w-[300px]" src={img11} alt="" />
        </div>
    </div>
  )
}

export default TraiNghiemGioNuocHoa