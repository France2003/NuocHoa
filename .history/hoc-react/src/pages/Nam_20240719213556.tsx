import { Helmet } from "react-helmet";
import { nam } from "../data/Nam";

const Nam = () => {
    return (
        <div className="mt-32">
            <h1 className="text-[#333] text-[15px] uppercase font-[500] mx-9 tracking-wider mb-2">MÙI HƯƠNG CHO NAM </h1>
            <div className="flex mt-32 mb-8 justify-evenly mx-auto flex-wrap gap-y-24 w-[1390px] gap-[25px]">
                {nam.map((nam) => {
                    return (
                        <div className="w-[300px]  h-[350px] flex flex-col justify-center items-center">
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>MÙI HƯƠNG CHO NAM </title>
                                <link rel="canonical" href="http://mysite.com/example" />
                            </Helmet>
                            <img className="m-auto" width={250} height={200} src={nam.img} alt={nam.infomation} />
                            <div className="Title text-center leading-7">
                                <p className="text-[#878787] text-[14px] mt-5">{nam.sex}</p>
                                <p className="text-[18px] font-medium inline-block text-[#333]">{nam.infomation}</p>
                                <b className="inline text-[17.4px] font-[600]">{nam.price}</b>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Nam;
