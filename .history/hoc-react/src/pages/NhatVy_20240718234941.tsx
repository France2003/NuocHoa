import img5 from '../../public/img/img5.jpg'
const NhatVy = () => {
    return (
        <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Lê Nhật Thảo Ly </p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>Nước Hoa Unisex Codedeco: Sự Lựa Chọn Hoàn Hảo Cho Mọi Giới Tính</h1>
            <p className='mx-9 '><mark>Codedeco</mark> tự hào giới thiệu dòng nước hoa unisex độc đáo, kết hợp hoàn hảo giữa phong cách thanh lịch và sự cuốn hút quyến rũ.
                Với những hương thơm tinh tế từ thiên nhiên, Codedeco mang đến cho bạn một trải nghiệm mùi hương đầy khác biệt,
                phù hợp cho cả nam và nữ. Hãy cùng khám phá và tận hưởng những giây phút thăng hoa cùng Codedeco - nước hoa unisex đẳng cấp,
                khẳng định cá tính và phong cách riêng của bạn.</p>
            <div className='mt-3 text-center'>
                <img className="w-[1050px] h-[470px] m-auto" src={img5} alt="" />
                <i>Nước hoa unisex Codedeco</i>
            </div>
            <div className='mx-9'>
                <p>Nước Hoa Unisex Là Gì?</p>
                <p>Nước hoa unisex là dòng sản phẩm nước hoa phù hợp với cả nam và nữ.
                    Không quá mạnh mẽ như các dòng nước hoa nam, cũng không quá ngọt ngào như các loại nước hoa nữ,
                    nước hoa unisex mang đến sự cân bằng tuyệt vời, phù hợp cho mọi giới tính và mọi dịp.</p>
            </div>
        </div>
    )
}

export default NhatVy