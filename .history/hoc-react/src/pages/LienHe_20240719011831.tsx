
const LienHe = () => {
  return (
    <div className=" lienhe mt-32 mb-5   w-[1120px]  flex justify-around flex-col  m-auto leading-7">
        <p className="font-[600] text-[20px]">THÔNG TIN LIÊN HỆ</p>
        <p><b>Địa chỉ chúng tôi</b>: Số 60+ 62/435 Đ. Xuân Đỉnh, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội</p>
        <p><b>Email</b>:Info.codedeco@gmail.com</p>
        <p><b>Điện thoại</b>:05678.82.111 ( CSKH : 05678.83.111 )</p>
        <p><b>Thời gian làm việc</b>:Thứ 2 đến Thứ 7 từ 8h đến 17h</p>
        <div className="">
            <p>Nhập thông tin của bạn vào Form dưới đây để được hỗ trợ tốt nhất.</p>
            <input type="text" placeholder="Tên của bạn" />
            <input type="tel" placeholder="Số điện thoại" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="Nội dung chi tiết" />
        </div>
    </div>
  )
}

export default LienHe