import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from './Header';
import Sidebar from './Sidebar';
import './Calendar.css';

const localizer = momentLocalizer(moment);

function Calendar() {
  const events = [
    {
      title: 'Meeting',
      start: new Date(2023, 8, 20, 10, 0),
      end: new Date(2023, 8, 20, 11, 30),
    },
    {
      title: 'Lunch',
      start: new Date(2023, 8, 21, 12, 0),
      end: new Date(2023, 8, 21, 13, 0),
    },
  ];

  return (
    <div className="calendar-page">
      <Header />
      <div className="calendar-content">
        <Sidebar />
        <main className="main-content">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 64px)' }}
          />
        </main>
      </div>
    </div>
  );
}

export default Calendar;