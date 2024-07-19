import { Helmet } from "react-helmet";
import { tinhdau } from "../data/Tinhdau";

const TinhDau = () => {
    return (
        <div className="mt-32">
            <h1 className="text-[#333] text-[20px] uppercase font-[500] mx-12 tracking-wider mb-2">TINH DẦU KHUẾCH TÁN</h1>
            <div className="flex mt-20 mb-9 justify-evenly mx-auto flex-wrap gap-y-24 w-[1390px] gap-[25px]">
                {tinhdau.map((td) => {
                    return (
                        <div className="w-[300px]  h-[350px] flex flex-col justify-center items-center">
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>TINH DẦU KHUẾCH TÁN</title>
                                <link rel="canonical" href="http://mysite.com/example" />
                            </Helmet>
                            <img className="m-auto" width={250} height={200} src={td.img} alt={td.infomation} />
                            <div className="Title text-center leading-7">
                                <p className="text-[#878787] text-[14px] mt-5">{td.sex}</p>
                                <p className="text-[18px] font-medium inline-block text-[#333]">{td.infomation}</p>
                                <b className="inline text-[17.4px] font-[600]">{td.price}</b>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TinhDau;
