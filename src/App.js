import { useState } from 'react'
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const apiKey = '04a3de3d38e1f0efbd3cb73d312aa4b6'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`

  const searchWeather = event => {
    if (event.key === 'Enter') {
      axios.get(url)
        .then(res => {
          setData(res.data)
          console.log(res.data)
          setLocation('')
        })

    }
  }


  return (
    <div className="app">
      <div className='searchBar'>
        <input
          type="text"
          placeholder="Search city"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchWeather}
        />

      </div>
      
      <div className='weatherInfo'>
        <h1>{data.name}</h1>

        {data.weather ? <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].main} /> : null}
        {data.weather ? <h2>{data.weather[0].main}</h2> : null}
        {data.main ? <h2>{data.main.temp.toFixed()}°F</h2> : null}

      </div>

    </div>
  );
}

export default App;
