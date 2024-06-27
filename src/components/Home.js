import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";

function Home() {
  const [time, setTime] =useState( new Date() );
  const [greetmsg, setGreetmsg] = useState('Day');

  useEffect(
    ()=> {
      const interval = setInterval(()=>{
       setTime(new Date());
      },1000)
      return() => clearInterval(interval);
    }
    ,[]);
    // console.log(time);

 const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const formatTime = (time) => {
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const year = time.getFullYear();
  const month = months[time.getMonth()];
  const day = days[time.getDay()];
  const date = time.getDate().toString().padStart(2, "0"); // Day of the month

  return `${day} ${date}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};
const hours = time.getHours().toString().padStart(2, "0");

useEffect(()=>{
  let newMsg = 'M orning';

  if (hours >= 4 && hours < 12) {
     newMsg= 'Morning';
  } else if (hours >= 12 && hours < 17) {
    newMsg = 'Afternoon';
  } else if (hours >= 17 && hours < 21) {
    newMsg = 'Evening';
  } else {
    newMsg = 'Night';
  }
setGreetmsg(newMsg);
},[time])

  return (
    <>
      <main>
        <Tasks />
      </main>
      <footer> 
      <section className="h1"> 
        <p className="greet">{`Good ${greetmsg}`} </p>
        <p className="time"> {formatTime(time)}</p>
        </section>
      </footer>
    </>
  );
}

export default Home;
