import { Link } from "react-router-dom";
import { Collection } from "../data/Collection";

interface Product {
  id: number;
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
      <img src={product.img} alt={product.information} className="w-[575px] h-[575px]" />
      <div>
        <h2 className="text-[#383838] text-[27px] font-[600]">{product.information}</h2>
        <p>Giá: {product.price}</p>
        <p>Giới tính: {product.sex}</p>
        <p>{product.deal}</p>
      </div>
    </div>
  )
}

export default CodecoPageDateil