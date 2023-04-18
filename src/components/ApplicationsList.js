import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchApplications } from '../api';

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApplications();
      setApplications(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.app_key ? app.app_key.toString() : Math.random()}>
            <Link to={`/events/${app.app_key}/6000`}>{app.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default ApplicationsList;
