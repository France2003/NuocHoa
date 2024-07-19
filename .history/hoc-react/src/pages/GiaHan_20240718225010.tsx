import img1 from '../../public/img/Img1.png'
import imgI from '../../public/img/img1.1.png'
import imgII from '../../public/img/img1.2.png'
import imgIII from '../../public/img/img1.3.png'
import imgIV from '../../public/img/img1.4.png'
import imgV from '../../public/img/img1.5.png'
import imgVI from '../../public/img/img1.6.png'
const GiaHan = () => {
    return (
        <div className='mt-32 w-[1120px]  flex justify-around flex-col  m-auto '>
            <p className='text-[#333] text-[15px] uppercase font-[500] tracking-wider'>Lê Trần Gia Hân</p>
            <h1>Cách xịt nước hoa đúng cách và 3 vị trí xịt thơm lâu nhất  </h1>
            <img src={img1} alt="" />
            <ul className='I'>
                I.Những sai lầm thường gặp khi sử dụng nước hoa có thể bạn chưa biết  :
                <li>• Sử dụng nhiều mùi hương làm giảm bám mùi nước hoa.</li>
                <li>• Xịt dặm nước hoa quá nhiều lần trong ngày.</li>
                <li>• Xịt ở những vị trí không bám mùi.</li>
                <li>• Chà xát mạnh sau khi xịt.</li>
            </ul>
            <ul className='II'>
                II. Những vị trí xịt nước hoa giúp lưu hương lâu  :
                <li>• Trên cổ tay</li>
                <li>• Trên cổ</li>
                <li>• Tóc</li>
            </ul>
            <img src={imgI} alt="" />
            <img src={imgII} alt="" />
            <ul className='III'>
                III. Hướng dẫn A - Z xịt nước hoa đúng cách lưu mùi suốt ngày dài  :
                <li>• Bước 1: Tắm rửa sạch sẽ, hương thơm sẽ bám lâu hơn trên da sạch.</li>
                <li>• Bước 2: Lựa chọn nước hoa và vị trí xịt phù hợp.</li>
                <li>• Bước 3: Giữ khoảng cách phù hợp.</li>
                <li>• Bước 4: Chờ đợi nước hoa khô tự nhiên. </li>
                <li>• Bước 5: Không chà xát và xịt thêm nếu cần thiết.</li>
            </ul>
            <ul className='IV'>
                <li>1. Tinh dầu nước hoa Matcha Chilling Day – CODEDECO:</li>
                <p>Matcha Chilling Day - Sự kết hợp giữa hương trà xanh thanh mát và hương hoa quả chua thanh,
                    đôi chút ngọt ngào của dừa đã tạo nên một nét tổng thể hài hòa, dễ chịu. Độ giữ mùi từ 6 - 8h.</p>
                <div className='flex'>
                    <img className="w-[250px] h-[250px]" src={imgIII} alt="" />
                    <img src={imgIV} alt="" />
                </div>
                <li>2. Tinh dầu nước hoa Love Letter – CODEDECO:</li>
                <p>Với mùi thanh chua nhẹ nhàng của quả Quýt. Mang lại cảm giác nịnh mũi trong tầng hương đầu tiên.
                    Đến tầng hương tiếp theo, Love Letter chuyển mình sang những cánh hoa tao nhã, nhẹ nhàng và nữ tính,
                    thêm một chút trưởng thành và bản lĩnh của hoa Mộc Lan và cuối cùng là sự góp mặt của hoa nhài. Độ lưu hương: 6 - 8h.</p>
                <div>
                    <img src={imgV} alt="" />
                    <img src={imgVI} alt="" />
                </div>
            </ul>
        </div>
    )
}

export default GiaHan