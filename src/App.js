import React, { useEffect, useState } from 'react';
import WildfireMap from './WildfireMap';

function App() {
  const [wildfireData, setWildfireData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this with a local file or proxy if CORS blocks it
        const response = await fetch('/data/wildfires.geojson');
        const data = await response.json();
        console.log('Loaded wildfire data:', data);
        setWildfireData(data);
      } catch (error) {
        console.error('Failed to load wildfire data', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5 * 60 * 1000); // refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
      <div style={{ height: '100vh' }}>
        {wildfireData ? <WildfireMap data={wildfireData} /> : <p>Loading wildfire data…</p>}
      </div>
  );
}

export default App;
