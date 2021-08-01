import React ,{Component} from 'react'
import Forms from './Components/Forms'
import Weather from './Components/Weather'
import './App.css';


const apiKey="183d535bc55825472743ffc0a1ab4df6";

class App extends Component  {
  state={
    temperture:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:""
  }
  
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`)
    const data = await api.json();
    if(city && country) {
        this.setState({
          temperture: data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:"" 
        })
      }else{
        this.setState({
          temperture:"",
          city:"",
          country:"",
          humidity:"",
          description:"",
          error:" Please Enter Data"
        })
      }
  }
  render(){
    return (
      <div className="wrapper">
        <div className="form-container">
          <Forms getWeather = {this.getWeather}/>
          <Weather 
          temperture={this.state.temperture}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error= {this.state.error} />
          </div>
      </div>
    );
  }
  
}

export default App;
