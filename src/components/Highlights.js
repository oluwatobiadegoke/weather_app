import { useContext } from 'react';
import AppContext from '../context/appContext';
import { MdNavigation } from "react-icons/md";
import Loader from './Loader';

const Highlights = () => {

    const { weather } = useContext(AppContext);
    const { wind_speed, humidity, visibility, air_pressure, wind_direction, wind_direction_compass } = weather;

    return (
        <div className="px-6 lg:px-0">
            <h1 className="font-bold text-text-500 text-2xl mb-8">Today's Highlights</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-cards-500 flex flex-col items-center justify-around py-5">
                        <p className="text-text-500 text-sm">Wind status</p>
                        <h2 className="text-6xl text-text-500 font-bold">{wind_speed ? wind_speed.toFixed(0) : <Loader />}<span className="text-4xl font-medium">mph</span></h2>
                        <div className="flex text-text-500 mt-5 text-xs items-center">
                            <div className="w-6 h-6 bg-utils-500 rounded-full mr-2 flex items-center justify-center"
                                style={{transform: `rotate(${wind_direction ? wind_direction.toFixed(0): "0"}deg)`}}
                            >
                                <MdNavigation />
                            </div>
                            <p>{wind_direction_compass}</p>
                        </div>
                    </div>
                    <div className="bg-cards-500 py-5">
                        <p className="text-text-500 text-sm text-center">Humidity</p>
                        <h2 className="text-6xl text-text-500 font-bold text-center my-3">{humidity}<span className="text-4xl font-medium">%</span></h2>
                        <div className="mx-10 text-text-500">
                            <div className="w-full flex justify-between">
                                <small>0</small>
                                <small>50</small>
                                <small>100</small>
                            </div>
                            <div className="relative h-2 w-full">
                                <div className="absolute inset-0 h-2 w-full rounded-full bg-text-500"></div>
                                <div className="absolute inset-0 z-10 h-2 w-full rounded-full bg-loader-500" style={{width: `${humidity}%`}}></div>
                            </div>
                            <div className="flex justify-end">
                                <small>%</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-cards-500 flex flex-col items-center justify-around py-5">
                        <p className="text-text-500 text-sm mb-2">Visibility</p>
                        <h1 className="text-6xl text-text-500 font-bold mb-1">{visibility ? visibility.toFixed(1) : <Loader />}<span className="text-4xl font-medium">miles</span></h1>
                    </div>
                    <div className="bg-cards-500 flex flex-col items-center justify-around py-5">
                        <p className="text-text-500 text-sm">Air Pressure</p>
                        <h1 className="text-6xl text-text-500 font-bold mb-1">{air_pressure ? air_pressure.toFixed(0): <Loader />}<span className="text-4xl font-medium">mb</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
