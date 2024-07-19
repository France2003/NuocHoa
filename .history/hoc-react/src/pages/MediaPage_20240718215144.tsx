import MediaProc from "../component/MediaProc/MediaProc"
import img1 from'../../public/img/Img1.png'
import img2 from'../../public/img/img2.jpg'
import img3 from'../../public/img/Img3.png'
import img4 from'../../public/img/img4.png'
import img5 from'../../public/img/img5.jpg'
import img6 from'../../public/img/img6.jpg'
import img7 from'../../public/img/img7.png'
const MediaPage = () => {
  return (
    <div className="container_Brand w-[1200px] ml-[50px] mt-44 m-auto flex flex-wrap gap-5 ">
        <MediaProc img={img1} title="Cách xịt nước hoa đúng cách và 3 vị trí xịt thơm lâu nhất " content="Những sai lầm thường gặp khi sử dụng nước hoa có thể bạn chưa biết..." />
        <MediaProc img={img7} title="PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ CỦA NƯỚC HOA" content="Nồng độ trong nước hoa xác định lượng phân tử hương thơm hòa tan trong cồn..."  />
        <MediaProc img={img5} title="Nước Hoa Unisex Codedeco: Sự Lựa Chọn Hoàn Hảo Cho Mọi Giới Tính" content="Codedeco tự hào giới thiệu dòng nước hoa unisex độc đáo..."  />
        <MediaProc img={img2} title="Vì sao nên dùng nước hoa dạng lăn" content="Nước hoa lăn là sản phẩm được sử dụng phổ biến hiện nay..."  />
        <MediaProc img={img3} title="Bí Quyết Chọn Nước Hoa Gây Thương Nhớ Cho Mọi Buổi Hẹn Hò " content="Bạn đang tìm kiếm bí quyết để ghi điểm ấn tượng trong mỗi lần gặp gỡ..."  />
        <MediaProc img={img4} title="TOP CÁC LOẠI TINH DẦU NƯỚC HOA CHO NGÀY HÈ NĂNG ĐỘNG" content="Tinh dầu nước hoa Matcha Chilling Day..."  />
        <MediaProc img={img6} title="TOP 3 TINH DẦU NƯỚC HOA CODEDECO VỚI MÙI HƯƠNG SEXY" content="Codedeco sứ mệnh đem lại cho khách hàng những mùi hương quyến rũ và thanh lịch..."  />    </div>
  )
}

export default MediaPage