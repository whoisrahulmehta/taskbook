import React, { useEffect, useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Loadingpage from "./components/Loadingpage";
import Landingpage from "./components/Landingpage";
import { Provider } from 'react-redux';
import { store } from "./store/store";
function App() {
  const [time, setTime] =useState( new Date() );

  useEffect(
    ()=> {
      const interval = setInterval(()=>{
       setTime(new Date());
      },1000)
      return() => clearInterval(interval);
    }
    ,[]);
    // console.log(time);

  const hours = time.getHours().toString().padStart(2, "0");

const appElement = document.body;

const [period, setPeriod] = useState('period');

useEffect(()=>{
  let newPeriod = 'morning';

  if (hours >= 4 && hours < 12) {
    newPeriod = 'morning';
  } else if (hours >= 12 && hours < 17) {
    newPeriod = 'afternoon';
  } else if (hours >= 17 && hours < 21) {
    newPeriod = 'evening';
  } else {
    newPeriod = 'night';
  }
setPeriod(newPeriod);
const setBg =()=>{
  // appElement.className = 'App'; // Reset to default class
  appElement.classList.add(period);
}

return()=>setBg();

},[time, appElement])

const [loading, setLoading] = useState(true) ;

useEffect(()=>{
  const timer = setTimeout(()=>setLoading(false),3000)
  return ()=> clearTimeout(timer);
},[]);

  return (
    <Provider store={store}>
    <div className="App ">
     <HashRouter  basename="/">
     {
      loading ? <Loadingpage /> : <Landingpage  />
     }
     </HashRouter>
    </div>
    </Provider>
  );
}

export default App;
