import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherInfo from './components/WeatherInfo'
import Forecast from './components/Forecast'


function App() {
  const [place, setPlace] = useState('Delhi')
  const [data, setData] = useState([])

  return (
    <div className="container">

      <SearchBar
        place={place}
        setPlace={setPlace}
        setData={setData}
      />
      
      <WeatherInfo
        place={place}
        setPlace={setPlace}
        data={data}
        setData={setData}
      />

      <Forecast data={data} />
    </div>
  );
}

export default App
