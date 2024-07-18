import { productline } from '../../data/ProductLine'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ProductLineItem {
  deal?: string;
  img: string;
  information: string;
  sex: string;
  price: string;
}
interface ProductItemProps {
    line: ProductLineItem;
  }
const ProductLine = () => {
    return (
        <div className="flex justify-evenly mx-auto flex-wrap gap-y-24 w-[1390px] gap-[25px]">
            {productline.map((line, index: number) => {
                return (
                    <ProductItem key={index} line={line} />
                )
            })}
        </div>
    )
}


const ProductItem = ({ line }: ProductItemProps) => {
    const controls = useAnimation()
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.8 }
            })
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={controls}
            className="w-[300px] h-[350px] flex flex-col justify-center items-center"
        >
            <div className="deal">
                <p>{line.deal}</p>
            </div>
            <img className="m-auto" width={250} height={200} src={line.img} alt={line.information} />
            <div className="Title text-center leading-7">
                <p className="text-[#878787] text-[14px] mt-5">{line.sex}</p>
                <p className="text-[18px] font-medium inline-block text-[#333]">{line.information}</p>
                <b className="inline text-[17.4px] font-[600]">{line.price}</b>
            </div>
        </motion.div>
    )
}

export default ProductLine
