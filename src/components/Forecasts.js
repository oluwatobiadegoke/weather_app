import {useContext} from 'react';
import AppContext from '../context/appContext';

const Forecasts = () => {

    const { forecasts, setFaren, faren } = useContext(AppContext);

    return (
        <div className="mb-8 px-12 lg:px-0">
            <div>
                <div className="flex justify-end py-5">
                    <button onClick={() => setFaren(false)} className="tempbutton bg-white text-button-celcius mr-3">
                        &deg;C
                    </button> 
                    <button onClick={() => setFaren(true)} className=" tempbutton bg-button-faren text-text-500 ">
                        &deg;F
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-text-500">
                    {
                        forecasts.map((forecast, index) => {
                            const { max_temp, min_temp, weather_state_abbr, weather_state_name, applicable_date } = forecast;
                            return(
                                <div key={index} className="bg-cards-500 py-4 px-5 flex flex-col justify-between items-center ">
                                    <p className="text-base mb-3">
                                        {
                                            index === 0 ? "Tomorrow" : 
                                            new Date(applicable_date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric',
                                            })
                                        }
                                    </p>
                                    <div>
                                        <img src={`https://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`} alt={weather_state_name} />
                                    </div>
                                    <div className="mt-7">
                                        <small className="mr-4">
                                            {
                                                !faren ? max_temp.toFixed(0): ((max_temp * 1.8) + 32).toFixed(0)
                                            }&deg;{!faren ? "C": "F"}
                                        </small>
                                        <small className="text-utils-500">
                                            {
                                               !faren ? min_temp.toFixed(0): ((min_temp * 1.8) + 32).toFixed(0)
                                            }&deg;{!faren ? "C": "F"}
                                        </small>
                                    </div>
                                </div>
                            )
                        })
                    }

                    
                   
                </div>
            </div>
        </div>
    )
}

export default Forecasts
