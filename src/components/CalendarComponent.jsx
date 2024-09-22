import  { useEffect, useState } from 'react'
import Fullcalendar from "@fullcalendar/react";
import dayGridPluggin from "@fullcalendar/daygrid"
import timeGridPluggin from "@fullcalendar/timegrid"
import interActionPluggin from "@fullcalendar/interaction"
import '../customClass.css'




function CalendarComponent() {
  const storedEvents =
  typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem('calendarEvents') || '[]')
    : [];
  const [events, setEvents] = useState(storedEvents)
  let [id, setId] = useState(1);

  const handleDateSelect=(selectionInfo) => {
    let title = prompt("Add event's title");
    let calendarApi =selectionInfo.view.calendar
    calendarApi.unselect()
    if (title) {
      const newEvent = {
        id: String(id++),
        title,
        start: selectionInfo.startStr,
        end: selectionInfo.endStr,
        allDay: selectionInfo.allDay,
        color: '#fc7f7f', // Couleur de fond
        textColor: 'white'   // Couleur du texte
      };
      calendarApi.addEvent(newEvent);
      setId(id);
      setEvents([...events, newEvent]); // Update events state
    }
  }

  const handleEventClick = (clickInfo) => {
    if (window.confirm("Delete Event?")) {
      clickInfo.event.remove();
      const updatedEvents = events.filter((event) => event.id !== clickInfo.event.id);
      setEvents(updatedEvents);
    }
  }

  const handleEvents = (events) => {
    setEvents(events);
    console.log('Events updated:', events);
  }

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);
  
  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents') || '[]');
    setEvents(storedEvents);
  }, []);
 
  return (
    
      <Fullcalendar
      plugins={[dayGridPluggin, timeGridPluggin, interActionPluggin]}
      initialView={'dayGridMonth'}
      initialEvents={events.map((event) => ({
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        allDay: event.allDay,
      }))}
      
      selectable={true}
      editable={true}
      select={handleDateSelect}
      eventClick={handleEventClick}
      eventRemove={() => {
        console.log("event deleted")
      }}
      eventsSet={handleEvents}
      headerToolbar={{
        start: "prev,next", 
        center:"title",
        end: "dayGridMonth,timeGridWeek,timeGridDay", 
      }}
      height={"80vh"}
      aspectRatio={5}
      
      />
    
  )
}

export default CalendarComponent