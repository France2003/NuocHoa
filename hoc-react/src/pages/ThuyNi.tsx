import img6 from'../../public/img/img6.jpg'
import img6I from'../../public/img/img6.1.jpg'
import img6II from'../../public/img/img6.2.jpg'
const ThuyNi = () => {
    return (
        <div className="mt-32 mb-5  w-[1120px]  flex justify-around flex-col  m-auto leading-7">
            <p className='text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2'>Phạm Thị Thúy Ni</p>
            <h1 className='uppercase text-[#383838] text-[27px] font-[600] mx-9 mb-5 tracking-wider'>TOP 3 TINH DẦU NƯỚC HOA CODEDECO VỚI MÙI HƯƠNG SEXY</h1>
            <p className='mx-9'><mark>Codedeco </mark>sứ mệnh đem lại cho khách hàng những mùi hương quyến rũ và thanh lịch. 
             Bằng sự hòa trộn tinh tế của các hương thơm gây cuốn hút, sản phẩm mang đến một trải nghiệm độc đáo và hoàn toàn khác biệt.
             Hãy để hương thơm của bạn lan tỏa một mùi hương đầy lôi cuốn, đánh thức mọi giác quan và để lại ấn tượng mãnh liệt với người đối điện.</p>
            <div className='mx-9 mt-5'>
                <p className='text-[18px] font-[500] mb-4'>1. TINH DẦU NƯỚC HOA CODEDECO SO SEXY BY NIGHT:</p>
                <img className='w-[1050px] h-[450px] m-auto' src={img6}  alt="" />
                <p className='text-center italic mb-4'>Tinh dầu nước hoa CODEDECO So Sexy By Night</p>
                <p><i className='font-[500]'>So Sexy By Night </i> là một sản phẩm lý tưởng cho phụ nữ muốn tăng thêm tự tin, quyến rũ và gợi cảm. 
                    Nó phù hợp cho các dịp tối ngoài trời và các sự kiện đặc biệt hoặc bất cứ khi nào bạn muốn tạo ấn tượng lâu dài. 
                    Các mùi hương Hoa Cam tươi sáng, Hoa Nhài Sambac thanh thoát và Hoa Huệ quyến rũ tất cả hòa quyện với nhau mang đến hương 
                    thơm quyến rũ hòa quyện một cách đặc biệt.</p>
            </div>
            {/*  */}
            <div className='mx-9 mt-5'>
                <p className='text-[18px] font-[500] mb-4'>2. TINH DẦU NƯỚC HOA CODEDECO VIE MERVILLEUSE:</p>
                <img className='w-[1050px] h-[450px] m-auto' src={img6I}  alt="" />
                <p className='text-center italic mb-4'>Tinh dầu nước hoa CODEDECO VIE MERVEILLEUSE </p>
                <p><i className='font-[500]'>VIE MERVILLEUSEV </i> là tuyệt tác nước hoa tuyệt vời đến từ CODEDECO, mang đến hương thơm đầy quyến rũ của 
                các loại hoa và thảo mộc Phương Đông. Đây không chỉ là một tác phẩm nghệ thuật tinh tế và sang trọng, mà còn thể hiện sự tôn vinh vẻ đẹp 
                hoàn hảo của phụ nữ. </p>
            </div>
            {/*  */}
            <div className='mx-9 mt-5'>
                <p className='text-[18px] font-[500] mb-4'>3. TINH DẦU NƯỚC HOA CODEDECO GOOD GIRL:</p>
                <img className='w-[1050px] h-[450px] m-auto' src={img6II}  alt="" />
                <p className='text-center italic mb-4'>Tinh dầu nước hoa CODEDECO Good Girl</p>
                <p><i className='font-[500]'>Good Girl </i> là một tác phẩm hương thơm đầy mê hoặc, kết hợp với các thành phần độc đáo để tạo ra 
                một mùi hương đặc biệt. Sử dụng Good girl bạn sẽ cảm nhận được sự mê hoặc, cuốn hút của nó và dẫn dắt vào một thế giới đầy sự lôi
                 cuốn, bí ẩn.</p>
            </div>
        </div>
    )
}

export default ThuyNi