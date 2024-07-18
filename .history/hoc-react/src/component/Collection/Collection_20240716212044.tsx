import React, { ReactNode } from "react"

type TCollection={
    img?: string;
    label: string;
}

const Collection = ({label,img}:TCollection) => {
  return (
    <div className="flex flex-col justify-center items-center text-black" >
        <img src={img} width={105} alt={label} />
        <div className="my-[25px] text-[9.6px]">
            {label}
        </div>
    </div>
  )
}

export default Collection