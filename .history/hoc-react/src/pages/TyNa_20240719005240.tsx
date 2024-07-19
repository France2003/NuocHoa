import img4 from '../../public/img/img4.png'
import img4I from '../../public/img/img4.1.png'
import img4II from '../../public/img/img4.2.png'
import { IoCall } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
const TyNa = () => {
    return (
        <div className='mt-32 mb-5 w-[1120px]  flex justify-around flex-col  m-auto leading-7 '>
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Nguyễn Thị Ty Na</p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>TOP CÁC LOẠI TINH DẦU NƯỚC HOA CHO NGÀY HÈ NĂNG ĐỘNG</h1>
            <div className='mx-9'>
                <p className='text-[18px] font-[500]  mb-3'>1. Tinh dầu nước hoa Matcha Chilling Day</p>
                <img src={img4} className='w-[1050px] h-[450px] m-auto' alt="" />
                <p className='text-center italic mb-3'>Tinh dầu nước hoa là gì?</p>
                <p className='text-[17px]'><b>Matcha Chilling Day</b> nằm trong top tinh dầu nước hoa được giới trẻ ưa chuộng với mùi hương dịu mát và tươi mới.
                    Phù hợp cho những ngày hè nóng nực giúp xua tan cái nắng oi bức mang lại sự thư thái, sảng khoái.
                    Sự lựa chọn để bắt đầu một ngày mới tràn đầy năng lượng cho mọi hoạt động.</p>
            </div>
            <div className='mx-9 mt-4'>
                <p className='text-[18px] font-[500]  mb-3'>2. Tinh dầu nước hoa Love Letter</p>
                <img src={img4I} className='w-[1050px] h-[450px] m-auto' alt="" />
                <p className='text-center italic mb-3'>Tinh dầu nước hoa và nước hoa khác nhau điểm nào?</p>
                <p className='text-[17px]'><b>Love Letter</b> mang đến hương thơm nhẹ nhàng, nữ tính nhờ sự kết hợp tinh tế giữa các loài hoa.
                    Phù hợp cho các cô nàng từ 19 tuổi trở lên. Love Letter chính là sự lựa chọn hoàn hảo để tôn lên nét đẹp dịu dàng,
                    ngọt ngào và cũng là lựa chọn lý tưởng cho những buổi hẹn hò lãng mạn hoặc những dịp đặc biệt trong mùa hè.</p>
            </div>
            <div className='mx-9 mt-4'>
                <p className='text-[18px] font-[500]  mb-3'>3. Tinh dầu nước hoa 1101</p>
                <img src={img4II} className='w-[1050px] h-[450px] m-auto' alt="" />
                <p className='text-center italic mb-3'>Tinh dầu nước hoa dành cho cả nam và nữ</p>
                <p className='text-[17px]'><b>1101</b> với sự tươi mát, sảng khoái và tràn đầy năng lượng như đang ở trong một không gian trong lành.
                    Hương đầu của Cam, Chanh và Gừng sự kết hợp này tạo cho bạn cảm giác tươi tắn, tỉnh táo như được tiếp thêm sinh lực ngay khi
                    vừa xịt và cuối ngày còn lưu hương Gỗ Tuyết Tùng, Vanilla để lại một dấu ấn khó quên.</p>
            </div>
            <div className='lienhe mx-9 mt-4'>
                <div className='flex gap-5'>
                    <FaArrowAltCircleRight className='text-[75px] '/>
                    <p>Trên đây là top 3 tinh dầu nước hoa đáng để thử cho mùa hè không chỉ giúp bạn thêm phần tự tin mà còn mang lại cảm giác tươi
                        mới và sảng khoái. Matcha Chilling Day, Love Letter và 1101 đều là những lựa chọn tuyệt vời để bạn tận hưởng mùa hè và tràn
                        đầy năng lượng. Hãy chọn cho mình một loại tinh dầu nước hoa phù hợp và thử sức với những khám phá mới mẻ trong mỗi ngày hè
                        năng động này!</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <IoCall className='text-[25px] text-green-600' />
                    <p>Gọi ngay hotline: 0856222454</p>
                </div>
            </div>
        </div>
    )
}

export default TyNa