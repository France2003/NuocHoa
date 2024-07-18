import React, { ReactNode } from "react"

type TCollection={
    img?: string;
    label: string;
}

const Collection = ({label,img}:TCollection) => {
  return (
    <div className="flex" >
        <img src={img} width={105} alt={label} />
        <div>
            {label}
        </div>
    </div>
  )
}

export default Collection