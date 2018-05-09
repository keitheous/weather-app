import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "4020ec17d93e3c219af0db2fcf860cac"

class App extends React.Component {
  // older version of react requires you to set up the method and
  // constructor seperately to bind it to App.
  // this.getWeather = this.getWeather.bind(this);
  // 4020ec17d93e3c219af0db2fcf860cac
  // http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}
  // 4020ec17d93e3c219af0db2fcf860cac&units=metric


  // weather api browser url -  http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
  // async await - great way to make api call
  getWeather = async (e) => {
    e.preventDefault()
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=kuching,malaysia&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
  }

  render(){
    return(
      <div>

        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather />

      </div>
    )
  }
}

export default App;
