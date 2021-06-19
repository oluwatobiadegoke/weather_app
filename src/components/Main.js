import { MdGpsFixed, MdLocationOn } from "react-icons/md";

const Main = () => {
    return (
        <div className="p-11 ">

            <div className="flex justify-between">
                <button className="shadow bg-utils-500 h-10 w-40 text-text-500">
                    Search for places
                </button>
                <button className="shadow bg-utils-500 h-10 w-10 rounded-full flex items-center justify-center">
                    <MdGpsFixed className="text-text-500" />
                </button>
            </div>

            <div className="w-full flex justify-center mt-16">
                <img src="./images/Clear.png" alt="clear" />
            </div>

            <h1 className="text-center text-9xl text-text-500 font-medium my-10">15
                <span className="text-5xl text-utils-500">&deg;C</span>
            </h1>

            <h3 className="text-center text-4xl text-utils-500">Shower</h3>
            <div className="text-utils-500">
                <div className="w-full mt-12 flex justify-center items-center">
                    <small className="px-4">Today</small>
                    <div className="w-1 h-1 bg-utils-500 rounded-full"></div>
                    <small className="px-4">Fri, 5 June</small>
                </div>
                <div className="flex justify-center mt-7">
                    <MdLocationOn />
                    <small>Helsinki</small>
                </div>
            </div>
            
        </div>
    )
}


export default Main
