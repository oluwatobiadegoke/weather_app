import { useState, useEffect, useCallback } from 'react';
import AppContext from './appContext';
const url = "https://www.metaweather.com/api/location/search/?query=";
const woeidurl = "https://www.metaweather.com/api/location/";
const proxy = "https://cors-anywhere-venky.herokuapp.com/";
const coordurl = "https://www.metaweather.com/api/location/search/?lattlong="

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
    const [ loading, setLoading ] = useState(true)

    //Stores the woeid value gotten from the getLocation function
    const [ woeid, setWoeid ] = useState(44418);

    //Stores the today's weather information gotten from the getWeather function
    const [ weather, setWeather ] = useState([]);

    //Stores the weather forecast values gotten from the getWeather function
    const [forecasts, setForecasts ] = useState([]);

    // For getting the location of users
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    const storePosition = (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    }

    const getCoordinates = async () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(storePosition);
            try {
                const res = await fetch(`${proxy}${coordurl}${lat},${long}`);
                const data = await res.json();
                console.log(data)
                if(data) {
                    setWoeid(data[0].woeid);
                    setLocation(data[0].title);
                } else {
                    setWoeid(0)
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Error met")
            setLat('');
            setLong('');
        }
    }

    

    const getLocation = useCallback(async() => {
        try {
            const res = await fetch(`${proxy}${url}${location}`);
            const data = await res.json();
            if(data) {
                const { woeid } = data[0];
                setWoeid(woeid);
            } else {
                setWoeid(0)
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    },[ location ])

    useEffect(() => {
       getLocation() 
    },[getLocation, location])

    const getWeather = useCallback(async() => {
        setLoading(true);
        try {
            const res = await fetch(`${proxy}${woeidurl}${woeid}`);
            const data = await res.json();
            if(data) {
                const { consolidated_weather } = data;
                const weather = consolidated_weather.find((each, index) => index === 0);
                const forecasts = consolidated_weather.filter((each, index) => index !== 0);
                setWeather(weather);
                setForecasts(forecasts);
                setSearchOpen(false);
            } else {
                setWeather([])
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, [woeid]);

    useEffect(() => {
        getWeather();
    },[getWeather, woeid])

    console.log(location)

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
            faren,
            getCoordinates
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;