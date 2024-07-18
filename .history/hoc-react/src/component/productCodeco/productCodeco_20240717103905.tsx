import { Collection } from "../../data/Collection"

const ProductCodeco = () => {
  return (
    <div className="flex justify-evenly w-full">
        {Collection.map((collection)=>{
            return(
                <div className="w-[220px] h-[350px] flex flex-col justify-center items-center">
                    <img className="m-auto" width={250} height={200} src={collection.img} alt={collection.information} />
                    <div className="text-center leading-6">
                        <p className="text-[#878787] text-[14px]">{collection.sex}</p>
                        <p className="text-[15px] font-medium inline-block text-[#333]">{collection.information}</p>
                        <b>{collection.price}</b>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductCodeco