import { selling } from "../../data/SellingProduct"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom";

interface SellingProductItem {
    deal: string;
    img: string;
    information: string;
    sex: string;
    price: string;
}
interface TSellingProduct {
    item: SellingProductItem;
}
const SellingProduct = () => {
    return (
        <div className="flex justify-evenly mx-auto flex-wrap gap-y-24 w-[1390px] gap-[25px]">
            {selling.map((item, index) => {
                return (
                    <SellingItem key={index} item={item} />
                )
            })}
        </div>
    )
}
//Hiệu ứng sản phẩm chạy từ trái sang phair
const SellingItem = ({ item }: TSellingProduct) => {
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
        <Link to={'/NuocHoa/sell'}>
            <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                className="w-[300px] h-[350px] flex flex-col justify-center items-center"
            >
                <div className="deal">
                    <p>{item.deal}</p>
                </div>
                <img className="m-auto" width={250} height={200} src={item.img} alt={item.information} />
                <div className="Title text-center leading-7">
                    <p className="text-[#878787] text-[14px] mt-5">{item.sex}</p>
                    <p className="text-[18px] font-medium inline-block text-[#333]">{item.information}</p>
                    <b className="inline text-[17.4px] font-[600]">{item.price}</b>
                </div>
            </motion.div>
        </Link>
    )
}

export default SellingProduct
