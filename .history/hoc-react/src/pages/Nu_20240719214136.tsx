import { Helmet } from "react-helmet";
import { nu } from "../data/Nu";

const Nu = () => {
    return (
        <div className="mt-32">
            <h1 className="text-[#333] text-[20px] uppercase font-[500] mx-12 tracking-wider mb-2">MÙI HƯƠNG CHO Nữ </h1>
            <div className="flex mt-20 mb-9 justify-evenly mx-auto flex-wrap gap-y-24 w-[1390px] gap-[25px]">
                {nu.map((nu) => {
                    return (
                        <div className="w-[300px]  h-[350px] flex flex-col justify-center items-center">
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>MÙI HƯƠNG CHO NỮ </title>
                                <link rel="canonical" href="http://mysite.com/example" />
                            </Helmet>
                            <img className="m-auto" width={250} height={200} src={nu.img} alt={nu.infomation} />
                            <div className="Title text-center leading-7">
                                <p className="text-[#878787] text-[14px] mt-5">{nu.sex}</p>
                                <p className="text-[18px] font-medium inline-block text-[#333]">{nu.infomation}</p>
                                <b className="inline text-[17.4px] font-[600]">{nu.price}</b>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Nu;
