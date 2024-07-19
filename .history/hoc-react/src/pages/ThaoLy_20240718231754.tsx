import img7 from'../../public/img/img7.png'
const ThaoLy = () => {
  return (
    <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
       <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Lê Nhật Thảo Ly </p>
       <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ CỦA NƯỚC HOA  </h1>
       <img className="w-[1050px] h-[470px] m-auto" src={img7} alt="" />
       <i className='mx-9 my-3'>Có lẽ mọi người khi đã từng mua hoặc dùng nước hoa đều gặp phải tình trạng nhìn thấy các dòng chữ EAU DE PARFUM, EAU DE TOILETTE,... 
        Tuy nhiên, không phải ai cũng hiểu rõ ràng về ý nghĩa của những dòng chữ này, điều này có thể gây ra sự bối rối.</i>
      <div>
        <p>NỒNG ĐỘ NƯỚC HOA LÀ GÌ?</p>
        <p>Nồng độ trong nước hoa xác định lượng phân tử hương thơm hòa tan trong cồn. 
          Nhiều người nhầm tưởng nước hoa chứa 100% tinh chất hương thơm, nhưng thực tế, 
          chúng được pha trộn với cồn và hợp chất khác theo công thức nhất định.</p>
        <p>Một chai nước hoa là sự pha trộn giữa mùi hương (tinh chất, hợp chất thơm, dầu) và lớp nền (etanol, nước). 
          Lớp nền làm loãng tinh dầu và giúp hương tỏa ra từ da, đồng thời cồn bảo quản các loại dầu dễ bay hơi và 
          đảm bảo các thành phần hương thơm kết hợp đúng cách.</p>
      </div>
    </div>
  )
}

export default ThaoLy