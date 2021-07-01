import React, { Component } from 'react';
import './App.css';
import Main from './Main';

import Header from './Header';


const key = process.env.REACT_APP_API_KEY;
const tablica = [0,1,2,3,4];
class App extends Component {
  state = { 
    value: '',
    temp: '',
    wind: '',
    clouds: '',
    icon: '',
    flag: false,
    mintemp: '',
    maxtemp: '',
    feelstemp: '',
    city: '',
    date: '',
    randomImg: 0,

   }
   handleInputChange = (e) => {
     this.setState({
       value: e.target.value,
     })
   }
   handleFormSubmit = (e) => {
     e.preventDefault()
     
     const api = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${key}&units=metric` 
     fetch(api)
     .then(response =>{
       if(response.ok){
         
         this.setState({flag: true})
         return response
       }
      else{  
        this.setState({flag: false})
        throw Error("W naszej bazie nie znalezlismy takiego miasta!")
      }
     })
     .then(response => response.json())
     .then(data => this.setState({
       temp: data.main.temp,
       wind: data.wind.speed,
       icon: data.weather[0].icon,
       mintemp: data.main.temp_min,
       maxtemp: data.main.temp_max,
       feelstemp: data.main.feels_like,
       city: data.name,
       date: new Date().toLocaleString(),
       randomImg: Math.floor(Math.random()*tablica.length),
       
     }))
     .catch(err => console.log(err))
     
     
   }
  render() { 
    return (
      <>
      <Header randomImg={this.state.randomImg}/>
      <Main inputValue={this.handleInputChange} value={this.state.value} state={this.state} handleFormSubmit={this.handleFormSubmit}/>
      
      </>
      );
  }
}
 
export default App;


