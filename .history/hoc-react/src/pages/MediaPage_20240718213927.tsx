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
    <div className="container_Brand w-full mt-44 m-auto ">
        <MediaProc img={img1} title="Cách xịt nước hoa đúng cách và 3 vị trí xịt thơm lâu nhất " />
        <MediaProc img={img2} title="Vì sao nên dùng nước hoa dạng lăn" />
        <MediaProc img={img3} title="Bí Quyết Chọn Nước Hoa Gây Thương Nhớ Cho Mọi Buổi Hẹn Hò " />
        <MediaProc img={img4} title="TOP CÁC LOẠI TINH DẦU NƯỚC HOA CHO NGÀY HÈ NĂNG ĐỘNG" />
        <MediaProc img={img5} title="Nước Hoa Unisex Codedeco: Sự Lựa Chọn Hoàn Hảo Cho Mọi Giới Tính" />
        <MediaProc img={img6} title="TOP 3 TINH DẦU NƯỚC HOA CODEDECO VỚI MÙI HƯƠNG SEXY" />
        <MediaProc img={img7} title="PHÂN BIỆT CÁC LOẠI NỒNG ĐỘ CỦA NƯỚC HOA" />
    </div>
  )
}

export default MediaPage