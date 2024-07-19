import img4 from '../../public/img/img4.png'
const TyNa = () => {
    return (
        <div className='mt-32 mb-5 w-[1120px]  flex justify-around flex-col  m-auto leading-7 '>
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Nguyễn Thị Ty Na</p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>TOP CÁC LOẠI TINH DẦU NƯỚC HOA CHO NGÀY HÈ NĂNG ĐỘNG</h1>
            <div className='mx-9'>
                <p className='text-[18px] font-[500]  mb-3'>1. Tinh dầu nước hoa Matcha Chilling Day</p>
                <img src={img4} className='w-[1050px] h-[450px] m-auto' alt="" />
                <p className='text-center italic mb-3'>Tinh dầu nước hoa là gì?</p>
                <p className='text-[17px] mx-3'><b>Matcha Chilling Day</b> nằm trong top tinh dầu nước hoa được giới trẻ ưa chuộng với mùi hương dịu mát và tươi mới.
                    Phù hợp cho những ngày hè nóng nực giúp xua tan cái nắng oi bức mang lại sự thư thái, sảng khoái.
                    Sự lựa chọn để bắt đầu một ngày mới tràn đầy năng lượng cho mọi hoạt động.</p>
            </div>
        </div>
    )
}

export default TyNa