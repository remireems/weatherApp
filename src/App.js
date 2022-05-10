import { useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const current = new Date()
  const date = `${current.getMonth() + 1}/${current.getDate()}`

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
        <h1 className='wName'>{data.name}</h1>
        <p className='wDate'>{date}</p>
        {data.weather ? <img className='wImg' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} /> : null}
        {data.weather ? <h2 className='weather'>{data.weather[0].main}</h2> : null}
        {data.main ? <h2 className='wTemp'>{data.main.temp.toFixed()}°F</h2> : null}
      </div>

    </div>
  );
}

export default App
