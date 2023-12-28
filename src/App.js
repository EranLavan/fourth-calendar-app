import { useState } from "react";
// import { Calendar } from "./Calendar"
// import './App.css';
import './styles/styles.scss'
import ExperimentOne from "./components/ExperimentOne.js";
// import { MOCKAPPS } from "./Calendar/conts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {

  // const [events, setEvents] = useState(MOCKAPPS);

  // const addEvent = (date, color) => {
  //   const text = window.prompt("text");
  //   setEvents((prev) => [
  //     ...prev, 
  //     { date, title: text, color, id: Math.random() }
  //   ])
  // };

  // const onDragEvents = (updatedEvents) => {
  //   setEvents(updatedEvents)
  // }
  // return (
  // <div className="App">
  //   <Calendar 
  //     startingDate={new Date()} 
  //     eventsArr={events} 
  //     addEvent={addEvent}
  //     onDragEvents={onDragEvents}
  //   />
  // </div>
  // )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    // <Home />
  )

}

export default App;

// node-sass not added properly
