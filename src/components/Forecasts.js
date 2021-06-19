import React from 'react'

const Forecasts = () => {
    return (
        <div>
            <div>
                <div className="flex justify-end py-5">
                    <button className="tempbutton bg-white text-button-celcius mr-3">
                        &deg;C
                    </button>
                    <button className=" tempbutton bg-button-faren text-text-500 ">
                        &deg;F
                    </button>
                </div>
                <div className="grid grid-cols-5 gap-6 text-text-500">
                    <div className="bg-cards-500 py-4 px-5 flex flex-col justify-between items-center ">
                        <p className="text-base">Day</p>
                        <div>
                            <img src="./images/Thunderstorm.png" alt="Cloud" />
                        </div>
                        <div className="mt-7">
                            <small className="mr-4">15&deg;C</small>
                            <small className="text-utils-500">9&deg;C</small>
                        </div>
                    </div>
                    <div className="bg-cards-500 py-4 px-5 flex flex-col justify-between items-center" >
                        <p className="text-base">Day</p>
                        <div>
                            <img src="./images/Thunderstorm.png" alt="Cloud" />
                        </div>
                        <div className="mt-7">
                            <small className="mr-4">15&deg;C</small>
                            <small className="text-utils-500">9&deg;C</small>
                        </div>
                    </div>
                    <div className="bg-cards-500 py-4 px-5 flex flex-col justify-between items-center">
                        <p className="text-base">Day</p>
                        <div>
                            <img src="./images/Thunderstorm.png" alt="Cloud" />
                        </div>
                        <div className="mt-7">
                            <small className="mr-4">15&deg;C</small>
                            <small className="text-utils-500">9&deg;C</small>
                        </div>
                    </div>
                    <div className="bg-cards-500 py-4 px-5 flex flex-col justify-between items-center">
                        <p className="text-base">Day</p>
                        <div>
                            <img src="./images/Thunderstorm.png" alt="Cloud" />
                        </div>
                        <div className="mt-7">
                            <small className="mr-4">15&deg;C</small>
                            <small className="text-utils-500">9&deg;C</small>
                        </div>
                    </div>
                    <div className="bg-cards-500 py-4 px-5 flex flex-col justify-between items-center">
                        <p className="text-base">Day</p>
                        <div>
                            <img src="./images/Thunderstorm.png" alt="Cloud" />
                        </div>
                        <div className="mt-7">
                            <small className="mr-4">15&deg;C</small>
                            <small className="text-utils-500">9&deg;C</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecasts
