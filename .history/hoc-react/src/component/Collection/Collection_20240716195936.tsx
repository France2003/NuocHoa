import React, { ReactNode } from "react"

type TCollection={
    icon?: React.ReactNode;
    label: string;
}

const Collection = ({label,icon}:TCollection) => {
  return (
    <div>
        <div>
            {icon}
        </div>
        <div>
            {label}
        </div>
    </div>
  )
}

export default Collection