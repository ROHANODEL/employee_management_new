
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal';
import '../style/calendarPage.scss'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Vacation",
        start: new Date(2022, 10, 0),
        end: new Date(2022, 10, 0),
    }
];

const CalendarPage = (props) => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (


        <div>
            <div className="leav-bal">
                <div></div>
                <div>
                    <input className="date-margin" type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }}
                        value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker className="date-margin" placeholder="start Date" 
                        selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker className="date-margin" placeholder="start Date" 
                        selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button className="btn btn-primary date-margin newbtnmargin" onClick={handleAddEvent}>click</button>
                </div>
            </div>

            <Calendar localizer={localizer} events={allEvents}
                startAccessor="start" endAccessor="end"
                className="new-calendar" />
        </div>


    )
}

export default CalendarPage