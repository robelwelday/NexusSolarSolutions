// ...existing code...
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

export const fetchData = async () => {
  try {
    console.log('Fetching from:', `${API_BASE_URL}/api/data`);
    const response = await fetch(`${API_BASE_URL}/api`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
// ...existing code...
