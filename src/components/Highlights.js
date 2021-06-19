import { MdNavigation } from "react-icons/md";

const Highlights = () => {
    return (
        <div>
            <h1 className="font-bold text-text-500 text-2xl mb-4">Today's Highlights</h1>
            <div>
                <div className="grid grid-cols-2 gap-12">
                    <div className="bg-cards-500 flex flex-col items-center justify-around py-5">
                        <p className="text-text-500 text-sm">Wind status</p>
                        <h2 className="text-6xl text-text-500 font-bold">7<span className="text-4xl font-medium">mph</span></h2>
                        <div className="flex text-text-500 mt-5 text-xs items-center">
                            <div className="w-6 h-6 bg-utils-500 rounded-full mr-2 flex items-center justify-center">
                                <MdNavigation />
                            </div>
                            <p>WSW</p>
                        </div>
                    </div>
                    <div className="bg-cards-500 py-5">
                        <p className="text-text-500 text-sm text-center">Humidity</p>
                        <h2 className="text-6xl text-text-500 font-bold text-center my-3">84<span className="text-4xl font-medium">%</span></h2>
                        <div className="mx-10 text-text-500">
                            <div className="w-full flex justify-between">
                                <small>0</small>
                                <small>50</small>
                                <small>100</small>
                            </div>
                            <div className="h-2 w-full rounded-full bg-text-500"></div>
                            <div className="flex justify-end">
                                <small>%</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-12 mt-7">
                    <div className="bg-cards-500 flex flex-col items-center justify-around py-5">
                        <p className="text-text-500 text-sm mb-2">Visibility</p>
                        <h1 className="text-6xl text-text-500 font-bold mb-1">6,4<span className="text-4xl font-medium">miles</span></h1>
                    </div>
                    <div className="bg-cards-500 flex flex-col items-center justify-around py-5">
                        <p className="text-text-500 text-sm">Air Pressure</p>
                        <h1 className="text-6xl text-text-500 font-bold mb-1">998<span className="text-4xl font-medium">mb</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
