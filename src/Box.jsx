import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import { motion } from "framer-motion";
import { TiWeatherCloudy } from "react-icons/ti";
import { useEffect, useState } from "react";
import axios from "axios"
function Box(props) {


    const [api, setapi] = useState(null)

    const cityname = api?.name;
    const wind = api?.wind.speed;
    const humidity = api?.wind.deg
    const country = api?.sys.country;
    const temp = api?.main.temp - 273.15.toFixed(2)

    useEffect(() => {

        let searchbar = document.querySelector('.search')
        let searchButton = document.getElementById("searchbuttion")


        searchButton.addEventListener("click", async () => {
            let city = searchbar.value
            console.log(city);
            const api_key = "dbafb71ede2f9aa594587683d9cdc97f"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`



            const responce = await axios.get(url)

            setapi(responce.data)
        })





    }, [])


    return (
        <motion.div drag dragConstraints={props.area} className="appSec">
            <div className="upper">
                <div className="left">
                    <TfiLocationPin className="location" />
                    <h1>{cityname + ","}{country}</h1>
                </div>
                <CgMenuGridR className="menu" />
            </div>
            <div className="searchsection">
                <input type="search" className='search' placeholder='Your City' defaultValue="Mahendranagar" />
                <button id='searchbuttion'>search</button>
            </div>

            <div className="weather">
                <TiWeatherCloudy className='weather-m' />
                <h1>{Math.floor(temp)}°C</h1>
            </div>
            <div className="lastsection">
                <h3>Humidity <br /> <h3 className='humidity'>{humidity}</h3></h3>
                <h3>Wind <br /> Speed <br />
                    <h3 className='wind-speed'>{wind}</h3>
                </h3>
            </div>
        </motion.div >
    )
}

export default Box;