import React, { ReactNode } from "react"

type TCollection={
    img?: string;
    label: string;
}

const Collection = ({label,img}:TCollection) => {
  return (
    <div >
        <img src={img} alt={label} />
        <div>
            {label}
        </div>
    </div>
  )
}

export default Collection