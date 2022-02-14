import axios from "axios"
import React, {useEffect, useState} from "react"
const api_key = process.env.REACT_APP_API_KEY



const Weather = ({lat, long}) => {


    const [wd, setWeather] = useState([])
    const [isBusy, setBusy] = useState(true)

    const call = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ long + '&appid=' + api_key

    const hook = () => {
        axios
            .get(call)
            .then(response => {
                console.log(response.data)
                setWeather(response.data)
                setBusy(false)
            })

    }

    useEffect(hook, [])


    if (isBusy) {
        return (
            <div>Waiting for data</div>
        )
    }
    return (
        
        <div>
            <div>Temperature: {wd.main.temp}</div>
            <div>Wind: {wd.wind.speed}</div>
            <div>Description: {wd.weather[0].description}</div>
        </div>
    )
}

export default Weather