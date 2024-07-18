import { selling } from "../../data/SellingProduct"

const SellingProduct = () => {
    return (
        <div className="flex justify-evenly flex-wrap w-[650px]">
            {selling.map((selling) => {
                return (
                    <div className="w-[220px] h-[350px] flex flex-col justify-center items-center">
                        <div className="deal">
                            <p>{selling.deal}</p>
                        </div>
                        <img className="m-auto" width={250} height={200} src={selling.img} alt={selling.information} />
                        <div className="Title text-center leading-7">
                            <p className="text-[#878787] text-[14px]">{selling.sex}</p>
                            <p className="text-[15px] font-medium inline-block text-[#333]">{selling.information}</p>
                            <b className="inline text-[17.4px] font-[600]">{selling.price}</b>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SellingProduct