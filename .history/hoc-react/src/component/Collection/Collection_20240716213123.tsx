import React, { ReactNode } from "react"

type TCollection={
    img?: string;
    label: string;
}

const Collection = ({label,img}:TCollection) => {
  return (
    <div>
        <div className="flex flex-col justify-evenly mx-[-30px] items-center text-black font-semibold w-full" >
        <img src={img} width={105} alt={label} />
        <div className="my-[25px] text-[11px]">
            {label}
        </div>
    </div>
    </div>
  )
}

export default Collection