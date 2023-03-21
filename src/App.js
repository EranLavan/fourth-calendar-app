import { useState } from "react";
import { Calendar } from "./Calendar"
import './App.css';
import { MOCKAPPS } from "./Calendar/conts";

export default function App() {

  const [events, setEvents] = useState(MOCKAPPS);

  const addEvent = (date, color) => {
    const text = window.prompt("text");
    setEvents((prev) => [
      ...prev, 
      { date, title: text, color, id: Math.random() }
    ])
  };

  const onDragEvents = (updatedEvents) => {
    setEvents(updatedEvents)
  }
  return (
  <div className="App">
    <Calendar 
      startingDate={new Date()} 
      eventsArr={events} 
      addEvent={addEvent}
      onDragEvents={onDragEvents}
    />
  </div>
  )
}

