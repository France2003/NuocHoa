import { Collection } from "../../data/Collection"

const ProductCodeco = () => {
  return (
    <div className="flex w-full">
        {Collection.map((collection)=>{
            return(
                <div className="">
                    <img width={183} height={183} src={collection.img} alt={collection.information} />
                    <div>
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