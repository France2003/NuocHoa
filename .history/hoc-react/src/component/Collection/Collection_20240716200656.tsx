import React, { ReactNode } from "react"
import { Link } from "react-router-dom";
import { Interface } from "readline";

interface Collection{
    label: string;
    path: string;
    img: string;
}

type TCollection={
    items: Collection[];
    // label: string;
}

const Collection = ({items}:TCollection) => {
  return (
    <div >
        {items.map((item, index)=>{
            return(
                <Link key={index} to={item.img}>
                    <img src={item.img} alt={item.label}/>
                    <p>{item.label}</p>
                </Link>
            )
        })}
    </div>
  )
}

export default Collection