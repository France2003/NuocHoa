import img2 from'../../public/img/img2.jpg'
import img2I from'../../public/img/img2.1.jpg'
import img2II from'../../public/img/img2.2.jpg'
import img2III from'../../public/img/img2.3.jpg'

const ThuThuy = () => {
    return (
        <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Phạm Thu Thủy</p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>Vì sao nên dùng nước hoa dạng lăn </h1>
            <i className='mx-9'>Nước hoa lăn là sản phẩm được sử dụng phổ biến hiện nay do sự tiện dụng của nó. Với thiết kế nhỏ gọn tiện dụng, dễ mang theo và đa dạng mùi hương. Nước hoa dạng lăn đang là một trong những sự lựa chọn được ưu tiên của học sinh, sinh viên.</i>
            <div className='flex gap-3 mt-3 m-auto'>
                <img className="w-[400px] h-[360px] m-auto" src={img2I} alt="" />
                <img className="w-[400px] h-[360px] m-auto" src={img2} alt="" />
            </div>
            <div className='mx-9 mt-5'>
                <p className='text-[19px] font-[500]'>Nước hoa dạng lăn là gì ?</p>
                <p>Nước hoa dạng lăn là loại nước hoa có đầu thiét kế tiện lợi, 
                    chỉ cần dùng tay lăn nhẹ nước hoa sẽ trải đều trên vùng da đó. 
                    Nước hoa dạng lăn có hình dáng nhỏ gọn, tiện lợi, dễ dàng mang theo, 
                    phù hợp cho những bạn hay đi du lịchh hoặc có công việc thường xuyẻn xê dịch nhiều nơi.</p>
            </div>
        </div>
    )
}

export default ThuThuy