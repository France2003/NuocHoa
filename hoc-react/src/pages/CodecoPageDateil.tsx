import { Helmet } from "react-helmet";
import { Collection } from "../data/Collection";

interface Product {
  id: number;
  name:string;
  img: string;
  sex: string;
  information: string;
  price: string;
  deal: string;
}

const getProductDetail = (id: number): Product | undefined => {
  return Collection.find(product => product.id === id)
}

const CodecoPageDateil: React.FC<{ id: number }> = ({ id }) => {
  const product = getProductDetail(id);

  if (!product) {
    return <div>Sản phẩm không tồn tại.</div>;
  }
  return (
    <div className="mt-32 mb-5  w-[1120px]  flex justify-around   m-auto leading-7">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src={product.img} alt={product.information} className="w-[575px] h-[575px]" />
      <div className="mt-[35px] leading-8">
        <h2 className="text-[#383838] text-[27px] font-[600]">{product.information}</h2>
        <p className="text-[#2b2b2b] text-[24px] font-[600] mt-[25px]">{product.price}</p>
        <p><b>Nhóm hương</b>: Trà, Cam Bergamot</p>
        <p><b>Độ toả hương</b>: Trong vòng bán kính 1 cánh tay</p>
        <p><b>Thời điểm khuyên dùng</b>: Dịu mát, Tươi mới, Thanh lịch</p>
        <p><b>Độ lưu hương: </b>6 – 8 giờ, sử dụng trên quần áo có thể lên tới 12 giờ</p>
        <p><b>Giới tính</b>: Unisex</p>
        <p><b>Xuất xứ</b>: Việt Nam</p>
        <p><b>Thương hiệu</b>: CODEDECO</p>
        <p><b>Trọng Lượng </b>: 105g</p>
        <div className="flex gap-7 mt-5">
          <button className="p-[5px] w-[150px] bg-black text-white border">ADD TO CART</button>
          <button className="p-[5px] w-[150px] bg-orange-600 text-white border">MUA NGAY</button>
        </div>
      </div>
    </div>
  )
}

export default CodecoPageDateil