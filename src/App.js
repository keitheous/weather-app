import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "4020ec17d93e3c219af0db2fcf860cac"

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
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
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json(); // response from api
    // console.log(data)
    // set state here - dont directly manipulate the data using this.state.temperature and etc.. use setState built in method
    // this.setState({
    //   temperature: data.main.temp,
    //   city: data.name,
    //   country: data.sys.country,
    //   humidity: data.main.humidity,
    //   description: data.weather[0].description,
    //   error: ''
    // })
    if (city && country){
      // console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values.'
      })
    }

  }

  render(){
    return(
      <div>
        <div className='wrapper'>
          <div className="main">
            <div className="container">
              <div className="row">
                <div className='col-xs-5 title-container'>
                  <Titles/>
                </div>

                <div className='col-xs-7 form-container'>
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
