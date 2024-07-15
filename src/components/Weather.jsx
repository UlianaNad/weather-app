import React, { useState } from 'react'
import Search from './Search'

const Weather = () => {

const [search , setSearch] = useState('');
const [loading, setLoading] = useState(false);
const [weatherData, setWeatherData] = useState(null);

const ApiKey = 'd8634e1b3e613138fe7a90418f3b73e4';
async function fetchWeatherData (param){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=d8634e1b3e613138fe7a90418f3b73e4`);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        
    }
}

async function handleSearch(){
fetchWeatherData(search)
}

  return (
    <div>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
        Weather</div>
  )
}

export default Weather