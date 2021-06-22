import { useContext } from 'react';
import AppContext from '../context/appContext';
import { MdGpsFixed, MdLocationOn } from "react-icons/md";
import Loader from './Loader';

const Main = () => {

    const { 
        toggleSearch, 
        weather, 
        location, 
        faren,
        getCoordinates,
    } = useContext(AppContext);

    const { the_temp, weather_state_abbr, weather_state_name, applicable_date } = weather;


    return (
        <div className="p-11 static lg:fixed top-0 left-0 bottom-0 w-full lg:w-96 h-screen bg-cards-500">

            <div className="flex justify-between">
                <button className="shadow bg-utils-500 h-10 w-40 text-text-500" onClick={toggleSearch}>
                    Search for places
                </button>
                <button onClick={() => getCoordinates()} className="shadow bg-utils-500 h-10 w-10 rounded-full flex items-center justify-center">
                    <MdGpsFixed className="text-text-500" />
                </button>
            </div>

            <div className="w-full h-1/4 flex justify-center mt-16">
                <img className="h-full" src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt={weather_state_name} />
            </div>

            <h1 className="text-center text-9xl text-text-500 font-medium my-10">
                {
                    the_temp ? 
                    (!faren ? the_temp.toFixed(1): ((the_temp * 1.8) + 32).toFixed(1)) : 
                    <Loader />
                }
            <span className="text-5xl text-utils-500">&deg;{!faren ? "C": "F"}</span>
            </h1>

            <h3 className="text-center text-4xl text-utils-500">{weather_state_name}</h3>
            <div className="text-utils-500">
                <div className="w-full mt-12 flex justify-center items-center">
                    <small className="px-4">Today</small>
                    <div className="w-1 h-1 bg-utils-500 rounded-full"></div>
                    <small className="px-4">
                        {
                            new Date(applicable_date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                            })
                        }
                    </small>
                </div>
                <div className="flex justify-center mt-7">
                    <MdLocationOn className="mr-2"/>
                    <small>{location}</small>
                </div>
            </div>
            
        </div>
    )
}


export default Main
