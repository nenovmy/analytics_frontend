import React from 'react';

const EventTable = ({ events }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Platform</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      {events.map((event) => (
        <tr key={event.id}>
            <td>{event.name}</td>
            <td>{formatTime(event.time)}</td>
            <td>{event.platform}</td>
            <td>{event.country}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
};

const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
};  

export default EventTable;
