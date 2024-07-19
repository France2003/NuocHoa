import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom';
import { nam } from '../data/Nam';

interface ProductLineItem {
    id:number;
    img: string;
    information: string;
    sex: string;
    price: string;
}
interface ProductItemProps {
    nam: ProductLineItem;
}
const ProductLine = () => {
    return (
        <div className="flex justify-evenly mx-auto flex-wrap gap-y-24 w-[1390px] gap-[25px]">
            {nam.map((nam, index: number) => {
                return (
                    <ProductItem key={index} nam={nam} />
                )
            })}
        </div>
    )
}


const ProductItem = ({ nam }: ProductItemProps) => {
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
        <Link to={`/NuocHoa/line/${nam.id}`}>
            <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                className="w-[300px] h-[350px] flex flex-col justify-center items-center"
            >
                <img className="m-auto" width={250} height={200} src={nam.img} alt={nam.information} />
                <div className="Title text-center leading-7">
                    <p className="text-[#878787] text-[14px] mt-5">{nam.sex}</p>
                    <p className="text-[18px] font-medium inline-block text-[#333]">{nam.information}</p>
                    <b className="inline text-[17.4px] font-[600]">{nam.price}</b>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProductLine
