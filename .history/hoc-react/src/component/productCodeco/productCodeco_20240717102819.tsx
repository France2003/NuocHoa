import { Collection } from "../../data/Collection"

const ProductCodeco = () => {
  return (
    <div className="flex justify-evenly w-full">
        {Collection.map((collection)=>{
            return(
                <div className="w-[300px] h-[400px] flex flex-col justify-center items-center">
                    <img className="m-auto" width={200} height={200} src={collection.img} alt={collection.information} />
                    <div className="text-center">
                        <p>{collection.sex}</p>
                        <p>{collection.information}</p>
                        <b>{collection.price}</b>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductCodeco