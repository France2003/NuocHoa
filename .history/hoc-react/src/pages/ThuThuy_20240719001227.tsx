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
            <div className='flex'>
                <img className="w-[450px] h-[450px] m-auto" src={img2I} alt="" />
                <img className="w-[450px] h-[450px] m-auto" src={img2} alt="" />
            </div>
        </div>
    )
}

export default ThuThuy