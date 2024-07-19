import img1 from '../../public/img/Img1.png'
import imgI from '../../public/img/img1.1.png'
import imgII from '../../public/img/img1.2.png'
const GiaHan = () => {
    return (
        <div className='mt-32'>
            <p>Lê Trần Gia Hân</p>
            <h1>Cách xịt nước hoa đúng cách và 3 vị trí xịt thơm lâu nhất  </h1>
            <img src={img1} alt="" />
            <ul>
                I.Những sai lầm thường gặp khi sử dụng nước hoa có thể bạn chưa biết  :
                <li>• Sử dụng nhiều mùi hương làm giảm bám mùi nước hoa.</li>
                <li>• Xịt dặm nước hoa quá nhiều lần trong ngày.</li>
                <li>• Xịt ở những vị trí không bám mùi.</li>
                <li>• Chà xát mạnh sau khi xịt.</li>
            </ul>
            <ul>
                II. Những vị trí xịt nước hoa giúp lưu hương lâu  :
                <li>• Trên cổ tay</li>
                <li>• Trên cổ</li>
                <li>• Tóc</li>
            </ul>
            <img src={imgI} alt="" />
            <img src={imgII} alt="" />
            <ul>
                III. Hướng dẫn A - Z xịt nước hoa đúng cách lưu mùi suốt ngày dài  :
                <li>• Bước 1: Tắm rửa sạch sẽ, hương thơm sẽ bám lâu hơn trên da sạch.</li>
                <li>• Bước 2: Lựa chọn nước hoa và vị trí xịt phù hợp.</li>
                <li>• Bước 3: Giữ khoảng cách phù hợp.</li>
                <li>• Bước 4: Chờ đợi nước hoa khô tự nhiên.  </li>
                <li>• Bước 5: Không chà xát và xịt thêm nếu cần thiết  .</li>
            </ul>
        </div>
    )
}

export default GiaHan