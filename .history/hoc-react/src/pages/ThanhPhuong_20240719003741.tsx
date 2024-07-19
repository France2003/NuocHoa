import img3 from '../../public/img/Img3.png'
import img3I from '../../public/img/img3.1.png'
import img3II from '../../public/img/img3.2.png'
const ThanhPhuong = () => {
    return (
        <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Ngô Thanh Phương</p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>Bí Quyết Chọn Nước Hoa "Gây Thương Nhớ" Cho Mọi Buổi Hẹn Hò </h1>
            <i className='mx-9'>Bạn đang tìm kiếm bí quyết để ghi điểm ấn tượng trong mỗi lần gặp gỡ? Bạn muốn tạo ấn tượng khó phai, khiến người ấy nhớ mãi về bạn? Bí quyết nằm ngay trong những chai nước hoa <mark>CODEDECO</mark> - "Hương thơm gây thương nhớ" cho mọi buổi hẹn hò.</i>
            <div className='mx-9'>
                <p className='text-[19px] font-[600] mb-2'>I. Nước hoa CODEDECO đa dạng hương thơm </p>
                <div className='mx-3'>
                    <p>- CODEDECO không chỉ là một chai nước hoa đơn thuần, mà còn là "vũ khí bí mật" giúp bạn tự tin tỏa sáng và
                        chinh phục trái tim người thương. Với hương thơm tinh tế, quyến rũ,
                        CODEDECO sẽ khơi gợi sự tò mò và thu hút sự chú ý của người ấy. </p>
                    <p>CODEDECO mang đến đa dạng các dòng nước hoa với hương thơm phù hợp với mọi phong cách và cá tính. </p>
                </div>
                <p className='text-[19px] font-[600] mb-2'>II. Những hương nước hoa CODEDECO gợi ý cho bạn </p>
                {/*  */}
                <div>
                    <p className='mx-3 my-3 font-[500]' >1. Nước hoa CODEDECO ROSE BY CODE</p>
                    <img src={img3} className='w-[1050px] h-[450px] m-auto' alt="" />
                    <p className='text-center italic'>Nước hoa CODEDECO Rose by Code</p>
                    <div className=''>
                        <p> - ROSE BY CODE mang đến hương thơm nhẹ nhàng, khơi gợi vẻ đẹp thanh lịch và đầy nữ tính của người phụ nữ. 
                            Nước hoa mang hương thơm từ hoa hồng gợi cảm, nhẹ dịu nhưng gây độc đáo, hứng khởi cho các nàng. </p>
                        <p> - ROSE BY CODE là sự hoà hợp của hương hoa hồng nhẹ nhàng quyện cùng gỗ đàn hương và xạ hương tinh tế, 
                            tạo nên một tổng thể hài hòa, lôi cuốn. Mỗi tầng hương như hòa quyện vào nhau, tạo nên một ROSE BY CODE lãng mạn, 
                            e ấp như những cô nàng mới yêu.</p>
                    </div>
                </div>
                {/*  */}
                <div>
                    <p className='mx-3 my-3 font-[500]' >2. Nước hoa CODEDECO VIE Merveilleuse</p>
                    <img src={img3I} className='w-[1050px] h-[450px] m-auto' alt="" />
                    <p className='text-center italic'>Nước hoa CODEDECO VIE Merveilleuse</p>
                    <div className=''>
                        <p> - Là một dòng nước hoa thuộc nhóm Oriental Floral (Hương hoa cỏ phương đông), Vie Merveilleuse mở ra với hương cam,
                             quýt ở nốt hương đầu như một điểm chấm phá. Sau đó len lỏi sự thơm mát dễ chịu từ hoa nhài và hoa cam xen lẫn 
                             trong tầng hương giúp bạn dễ dàng cảm nhận sự tươi mát khi hương thơm lưu luyến trên da.</p>
                        <p> -  Vie Merveilleuse sẽ là một "trợ thủ đắc lực" mang lại cho bạn một phong cách sang trọng,
                             thanh lịch, gây thương nhớ cho người ấy.</p>
                    </div>
                </div>
                {/*  */}
                <div>
                    <p className='mx-3 my-3 font-[500]' >3. Nước hoa CODEDECO So Sexy By Night</p>
                    <img src={img3II} className='w-[1050px] h-[450px] m-auto' alt="" />
                    <p className='text-center italic'>Nước hoa CODEDECO So Sexy By Night</p>
                    <div className=''>
                        <p> - Làm sao có thể không nhắc đến em So Sexy By Night - một hương nước hoa nồng nàn, đầy gợi cảm và khiến bạn không thể cưỡng lại. 
                            Sự kết hợp tinh tế của những tầng hương tạo nên một vẻ đẹp đầy cá tính và quyến rũ của bạn. Điểm xuyết chút ngọt ngào mềm mại và gợi tình, 
                            So Sexy By Night mang đến cho bạn phong cách khiêu khích, tự tin và khiến người ấy càng say đắm. </p>
                    </div>
                </div>
            </div>
            <div className='mt-5 leading-7'>
                <p>Hãy để CODEDECO đồng hành cùng bạn trong mọi buổi hẹn hò, tạo nên những kỷ niệm đẹp đẽ trong tình yêu!  </p>
                <p>Đặt mua ngay CODEDECO hôm nay để "gây thương nhớ" cho người ấy! </p>
            </div>
        </div>
    )
}

export default ThanhPhuong