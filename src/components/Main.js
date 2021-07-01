import {React} from 'react';


const Main = props => {
    const {date,  temp, mintemp, maxtemp, wind, icon, feelstemp, flag, city} = props.state
    let content = null
    if(flag){
       
         content = (
            <>
            <h2 className="h2">{city} {temp} &#176; C <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={icon}></img> </h2>
            <p>Data: <strong>{date}</strong></p>
            <p>Feels like: <strong>{feelstemp}&#176; C </strong></p>
            <p>Minimum temp: <strong>{mintemp}&#176; C </strong></p>
            <p>Maximum temp: <strong>{maxtemp}&#176; C </strong></p>
            <p>Wind speed: <strong>{wind} km/h </strong></p>
            
           
            </>
        )
    }
    else if(!flag && !city) content = <h1>Wyszukaj miasto!</h1>
    else if(!flag && city) content = <h1>W naszej bazie nie ma takiego miasta</h1>
    return ( 
        <>
        <main>
            
            
           
            
        </main>
        <div className="diw">
        <form onSubmit={props.handleFormSubmit}>
                <input type="text" 
                value={props.value}
                 onChange={props.inputValue}
                 >
                     </input> <button>Wyszukaj</button>
            </form>
            
            {content}
        </div>
        </>
     );
}
 
export default Main;