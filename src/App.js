import { useState } from 'react';
import './App.css';

function App() {
  const [temperatureColor, setTemperatureColor] = useState("")
  const [temperatureValue, setTemperatureValue] = useState(10)

  function increaseTemperature(){
    if(temperatureValue === 30) return;

    const newValue = temperatureValue + 1;

    setTemperatureValue(newValue)

    if(newValue >= 15){
      setTemperatureColor("hot")
    }
  }

  function decreaseTemperature(){
    if(temperatureValue === 0) return;

    const newValue = temperatureValue - 1;

    setTemperatureValue(newValue)

    if(newValue < 20){
      setTemperatureColor("cold")
    }
  }
  return (
    <div className='container'>
    
    <div className="app-container">
    
    <div className="temperature-display-container">
    
<div className={`temperature-display ${temperatureColor}`}>
  {temperatureValue}°C
</div>
</div>
<div className="button-container">
<button onClick={increaseTemperature}>+</button>
<button onClick={decreaseTemperature}>-</button>
</div>
</div>
<h1 className={` ${temperatureColor}`}>Lani's Temperature App</h1>
    </div>
   
  );
}

export default App;
