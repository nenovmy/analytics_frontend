import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvents, fetchApplication } from '../api';
import EventTable from '../components/EventTable';
import './EventsPage.css';
import '../dark-mode.css';

const EventsPage = () => {
  const { app_key, time } = useParams();
  const [events, setEvents] = useState([]);
  const [appName, setAppName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const appData = await fetchApplication(app_key);
      if (appData) {
        setAppName(appData.name);
      }
      const eventData = await fetchEvents(app_key, time);
      setEvents(eventData);
    };

    fetchData();
  }, [app_key, time]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`events-page${darkMode ? ' dark-mode' : ''}`}>
      <button className="theme-toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h2>{appName}</h2>
      <p>Events in the last {time} minutes:</p>
      <EventTable events={events} />
    </div>
  );
};

export default EventsPage;