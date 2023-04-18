import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:12345',
});

export const fetchApplications = async () => {
  const response = await api.get('/applications');
  return response.data;
};

export const fetchEvents = async (appKey, time) => {
  const response = await api.get('/events', {
    params: { app_key: appKey, time },
  });
  return response.data;
};

export const fetchApplication = async (appKey) => {
    try {
      const response = await fetch(
        `http://localhost:12345/application?app_key=${appKey}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching application:', error);
      return null;
    }
};