
import { productline } from '../../data/ProductLine'

const ProductLine = () => {
  return (
    <div className="flex justify-evenly mx-auto flex-wrap gap-y-24 w-[1380px] gap-[25px]">
    {productline.map((line)=>{
        return(
            <div className="  w-[220px] h-[350px] flex flex-col justify-center items-center">
                 <div className="deal">
                    <p>{line.deal}</p>
                </div>
                <img className="m-auto" width={250} height={200} src={line.img} alt={line.information} />
                <div className="Title text-center leading-7">
                    <p className="text-[#878787] text-[14px] mt-5">{line.sex}</p>
                    <p className="text-[15px] font-medium inline-block text-[#333]">{line.information}</p>
                    <b className="inline text-[17.4px] font-[600]">{line.price}</b>
                </div>
            </div>
            
        )
    })}
</div>
  )
}

export default ProductLine