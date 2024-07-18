import { Collection } from "../../data/Collection"

const ProductCodeco = () => {
  return (
    <div>
        {Collection.map((collection)=>{
            return(
                <div className="w-full">
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