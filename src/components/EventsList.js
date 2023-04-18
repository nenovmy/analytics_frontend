import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api';

const EventsList = ({ appKey, time }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const data = await fetchEvents(appKey, time);
//        console.log('Fetched Events:', data);
        setEvents(data);
    };

    fetchData();
  }, [appKey, time]);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id ? event.id.toString() : Math.random()}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
