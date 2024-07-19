import img5 from '../../public/img/img5.jpg'
import img5I from '../../public/img/img5.1.jpg'
import img5II from '../../public/img/img5.2.jpg'
import img5III from '../../public/img/img5.3.jpg'
import img5IV from '../../public/img/img5.4.jpg'
import img5V from '../../public/img/img5.5.jpg'
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
            <div className='mx-9 mt-4'>
                <p className='text-[19px] font-[600] mb-2'>Nước Hoa Unisex Là Gì?</p>
                <p>Nước hoa unisex là dòng sản phẩm nước hoa phù hợp với cả nam và nữ.
                    Không quá mạnh mẽ như các dòng nước hoa nam, cũng không quá ngọt ngào như các loại nước hoa nữ,
                    nước hoa unisex mang đến sự cân bằng tuyệt vời, phù hợp cho mọi giới tính và mọi dịp.</p>
            </div>
            <div className='mx-9 mt-4'>
                <p className='text-[19px] font-[600] mb-2'>Lý Do Nước Hoa Unisex Codedeco Được Yêu Thích</p>
                <div className='flex'>
                    <p className='text-[18px] font-[500]'>Healing Hương Thơm Tự Nhiên</p>
                    <img src={img5I} className='w-[250px] h-[250px]' alt="" />
                    <p className=''>Nước hoa unisex của Cocodeco được chế tác từ những thành phần tự nhiên cao cấp,
                        mang lại hương thơm tươi mát và dễ chịu. Sự kết hợp hài hòa giữa các nốt hương gỗ, hoa,
                        và trái cây giúp bạn cảm thấy thư giãn và tự tin suốt cả ngày dài.</p>

                </div>
                <div>
                    <p className='text-[18px] font-[500]'>Thiết Kế Sang Trọng</p>
                    <img src={img5II} className='w-[250px] h-[250px]' alt="" />
                    <p>Thiết kế chai nước hoa unisex của Codedeco mang phong cách hiện đại và thanh lịch.
                        Chai thủy tinh trong suốt, với đường nét tinh tế, không chỉ đẹp mắt mà còn dễ dàng mang theo bên mình.</p>

                </div>
                <div>
                    <p className='text-[18px] font-[500]'>Độ Lưu Hương Lâu Dài</p>
                    <img src={img5III} className='w-[250px] h-[250px]' alt="" />
                    <p>Nước hoa unisex Codedeco chính là độ lưu hương ấn tượng.
                        Chỉ cần một vài giọt, bạn sẽ tỏa sáng với hương thơm suốt cả ngày mà không cần phải xịt lại nhiều lần.</p>

                </div>
            </div>
            <div>
                <p className='text-[18px] font-[500]'>Cách Sử Dụng Nước Hoa Unisex Hiệu Quả	</p>
                <img src={img5IV} className='w-[250px] h-[250px]' alt="" />
                <p>Bạn nên xịt nước hoa vào những điểm có mạch đập như cổ tay, sau tai, và vùng cổ.
                    Điều này giúp hương thơm lan tỏa tốt hơn và giữ mùi lâu hơn.</p>

            </div>
            <div>
                <p className='text-[18px] font-[500]'>Mua Nước Hoa Unisex Cocodeco Ở Đâu?</p>
                <img src={img5V} className='w-[250px] h-[250px]' alt="" />
                <p>Nước hoa unisex Codedeco không chỉ là một sản phẩm nước hoa thông thường,
                    mà còn là một biểu tượng của sự cân bằng và tinh tế.
                    Với hương thơm độc đáo, thiết kế sang trọng và độ lưu hương lâu dài,
                    nước hoa unisex của Codedeco chắc chắn sẽ là sự lựa chọn hoàn hảo cho bạn.</p>

            </div>
        </div>
    )
}

export default NhatVy