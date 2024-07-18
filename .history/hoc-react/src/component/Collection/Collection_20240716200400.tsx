import React, { ReactNode } from "react"
import { Interface } from "readline";

interface Collection{
    label: string;
    path: string;
    img: string;
}

type TCollection={
    items: MenuItem[];
    label: string;
}

const Collection = ({label,icon}:TCollection) => {
  return (
    <div >
        <img src={icon} alt="" />
        <div>
            {label}
        </div>
    </div>
  )
}

export default Collection