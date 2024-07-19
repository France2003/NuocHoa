import { Collection } from "../../data/Collection"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom";

interface CollectionItem {
    deal: string;
    img: string;
    information: string;
    sex: string;
    price: string;
}
interface ProductItemProps {
    collection: CollectionItem;
}
const ProductCodeco = () => {
    return (
        <div className="flex justify-evenly w-full">
            {Collection.map((collection, index) => {
                return (
                    <ProductItem key={index} collection={collection} />
                )
            })}
        </div>
    )
}
//Hiệu ứng sản phẩm chạy từ trái sang phải
const ProductItem = ({ collection }: ProductItemProps) => {
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
        <Link to={'/NuocHoa/codeco'}>
            <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                className="w-[220px] h-[350px] flex flex-col justify-center items-center"
            >
                <div className="deal">
                    <p>{collection.deal}</p>
                </div>
                <img className="m-auto" width={250} height={200} src={collection.img} alt={collection.information} />
                <div className="Title text-center leading-7">
                    <p className="text-[#878787] text-[14px] mt-5">{collection.sex}</p>
                    <p className="text-[15px] font-medium inline-block text-[#333]">{collection.information}</p>
                    <b className="inline text-[17.4px] font-[600]">{collection.price}</b>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProductCodeco
