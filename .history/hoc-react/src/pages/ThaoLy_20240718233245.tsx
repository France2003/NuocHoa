import img7 from '../../public/img/img7.png'
import img7I from '../../public/img/img7.1.png'
import img7II from '../../public/img/img7.2.png'
import img7III from '../../public/img/img7.3.png'
import img7IIII from '../../public/img/img7.4.png'
const ThaoLy = () => {
  return (
    <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
      <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Lê Nhật Thảo Ly </p>
      <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ CỦA NƯỚC HOA  </h1>
      <img className="w-[1050px] h-[470px] m-auto" src={img7} alt="" />
      <i className='mx-9 my-3'>Có lẽ mọi người khi đã từng mua hoặc dùng nước hoa đều gặp phải tình trạng nhìn thấy các dòng chữ EAU DE PARFUM, EAU DE TOILETTE,...
        Tuy nhiên, không phải ai cũng hiểu rõ ràng về ý nghĩa của những dòng chữ này, điều này có thể gây ra sự bối rối.</i>
      <div className='mx-9'>
        <p className='text-[20px] font-[600]'>NỒNG ĐỘ NƯỚC HOA LÀ GÌ?</p>
        <div className='mx-5'>
          <p> - Nồng độ trong nước hoa xác định lượng phân tử hương thơm hòa tan trong cồn.
            Nhiều người nhầm tưởng nước hoa chứa 100% tinh chất hương thơm, nhưng thực tế,
            chúng được pha trộn với cồn và hợp chất khác theo công thức nhất định.</p>
          <p> - Một chai nước hoa là sự pha trộn giữa mùi hương (tinh chất, hợp chất thơm, dầu) và lớp nền (etanol, nước).
            Lớp nền làm loãng tinh dầu và giúp hương tỏa ra từ da, đồng thời cồn bảo quản các loại dầu dễ bay hơi và
            đảm bảo các thành phần hương thơm kết hợp đúng cách.</p>
        </div>
        <div>
          <img src={img7I} className='h-[470px] w-[1050px] mt-3' alt="" />
        </div>
      </div>
      <div className='mx-9 mt-5 m'>
        <p className='text-[20px] font-[600]'>PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ NƯỚC HOA</p>
        <p className='mt-2 mb-5'>Tất cả các loại đều bắt đầu bằng chữ Eau, trong tiếng Pháp có nghĩa là “nước”, có 5 loại phổ biến sau:</p>
        <div className='flex w-[1200px] gap-3 flex-wrap'>
          <img className='h-[450px] w-[500px]' src={img7II} alt="" />
          <img className='h-[450px] w-[530px] ml-[-20px] mt-[-10px]' src={img7III} alt="" />
          <img className='h-[450px] w-[505px] ml-[511.199px] mt-[-30px]' src={img7IIII} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ThaoLy