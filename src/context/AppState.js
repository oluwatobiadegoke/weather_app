import { useState, useEffect, useCallback } from 'react';
import AppContext from './appContext';
const url = "https://www.metaweather.com/api/location/search/?query=";
const woeidurl = "https://www.metaweather.com/api/location/";
// const proxy = "https://cors-anywhere.herokuapp.com/";

const AppProvider = ({children}) => {

    //For toggling the search component
    const [searchOpen, setSearchOpen] = useState(false);
    const toggleSearch = () => setSearchOpen(!searchOpen);
    // -----------------------------------------------//

    //For toggling temperature unit
    const [ faren, setFaren ] = useState(false);

    //The state that handles the search term
    const [ location, setLocation ] = useState("London");

    //To determine the loading state
    const [ loading, setLoading ] = useState(false)

    //Stores the woeid value gotten from the getLocation function
    const [ woeid, setWoeid ] = useState(null);

    //Stores the today's weather information gotten from the getWeather function
    const [ weather, setWeather ] = useState([]);

    //Stores the weather forecast values gotten from the getWeather function
    const [forecasts, setForecasts ] = useState([]);

    const getLocation = useCallback(async() => {
        setLoading(true)
        try {
            const res = await fetch(`${url}${location}`);
            const data = await res.json();
            console.log(data)
            if(data) {
                const { woeid } = data[0];
                setWoeid(woeid);
            } else {
                setWoeid(0)
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    },[ location ])

    useEffect(() => {
       getLocation() 
    },[getLocation])

    const getWeather = useCallback(async() => {
        setLoading(true)
        try {
            const res = await fetch(`${woeidurl}${woeid}`);
            const data = await res.json();
            console.log(data)
            if(data) {
                const { consolidated_weather } = data;
                const weather = consolidated_weather.find((each, index) => index === 0);
                const forecasts = consolidated_weather.filter((each, index) => index !== 0);
                setWeather(weather);
                setForecasts(forecasts);
            } else {
                setWeather([])
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [woeid]);

    useEffect(() => {
        getWeather();
    },[getWeather, woeid])

    return (
        <AppContext.Provider value={{
            searchOpen,
            toggleSearch,
            setLocation,
            location,
            loading,
            weather,
            forecasts,
            setFaren,
            faren
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;