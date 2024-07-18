

const Footer = () => {
  return (
    <div className="containerFooter w-full bg-[#FAF9F5] h-[370px]  leading-6">
      <div className="flex justify-evenly mx-auto pt-7">
        <div className="FRAGRANCE w-[510px] leading-7">
          <h3 className="font-[600] text-[18px]">CODEDECO FRAGRANCE</h3>
          <p><b className="font-[600]">Người đại diện : </b>Dương Thị Uyên Nhung</p>
          <p><b className="font-[600]">Địa chỉ trụ sở : </b>Số 70 ngõ 445 Đ.Lạc Long Quân, Q.Tây Hồ, Hà Nội</p>
          <p><b className="font-[600]">Số đăng kí kinh doanh : </b>01B8021029</p>
          <p><b className="font-[600]">Đăng kí lần đầu ngày : </b>15/03/2022</p>
          <p><b className="font-[600]">Đăng kí thay đổi lần thứ 1 : </b> 21/04/2023</p>
          <p><b className="font-[600]">MST : </b> 8364994183</p>
          <div className="flex gap-2">
            <p><b>Hotline: </b>05678.83.111</p> - <p><b>CSKH : </b>05678.82.111</p>
          </div>
          <div className="flex gap-2">
            <img width={30} src="https://codedeco.art/wp-content/uploads/2023/04/social-facebook-2019-circle-512-1-300x300.webp" alt="" />
            <img width={30}  src="https://codedeco.art/wp-content/uploads/2023/04/instagram-512.webp" alt="" />
            <img width={30}  src="https://codedeco.art/wp-content/uploads/2023/04/Shopee-Icon-Bulat-01-150x150.png" alt="" />
            <img width={30}  src="https://codedeco.art/wp-content/uploads/2023/04/lazada-laz-round-icon-11662642367vewyj3oggn-150x150.png" alt="" />
            <img width={30}  src="https://codedeco.art/wp-content/uploads/2023/04/a4582de5738fc57f5af111af897a7316-150x150.jpg" alt="" />
          </div>
        </div>
        {/*  */}
        <div className=" Customer w-[377px]">
          <h3 className="font-[600] text-[18px]">CHĂM SÓC KHÁCH HÀNG</h3>
          <p>Hỏi đáp - FAQs</p>
          <p>Blogs</p>
          <p>Trải nghiệm mua sắm hài lòng</p>
          <p>Group mât mã về mùi hương</p>
          <div>
            <h3 className="font-[600] text-[18px]">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="flex gap-4 mt-2 mb-3">
              <img width={40} height={24} src="https://codedeco.art/wp-content/uploads/2023/11/ic-cash.svg" alt="" />
              <img width={40} height={24} src="https://codedeco.art/wp-content/uploads/2023/11/ic-internet-banking.svg" alt="" />
            </div>
            <img width={120} height={45} src="https://codedeco.art/wp-content/uploads/2023/07/logoSaleNoti.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className=" Polici w-[300px]">
          <h3 className="font-[600] text-[18px]">CHÍNH SÁCH BÁN HÀNG</h3>
          <p>Hướng dẫn mua hàng</p>
          <p>Chính sách đổi trả hàng</p>
          <p>Liên kết đại lý</p>
          <p>Điều khoản sử dụng</p>
          <p>Chính sách giao hàng ,nhận hàng, kiểm hàng và hoàn hàng</p>
          <p>Chính sách bảo mật thông tin cá nhân</p>
          <p>Chính sách bảo mật thông tin cá nhân</p>
          <p>Quy định chung</p>
        </div>
      </div>

    </div>
  )
}

export default Footer