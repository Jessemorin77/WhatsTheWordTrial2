import React, { useState, useEffect } from 'react';

type Location = {
  latitude: number;
  longitude: number;
}

type FetchLocationError =  {
  message: string;
}
const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchLocation(
      successCallback: (location: Location) => void,
      errorCallback: (error: FetchLocationError) => void
    ) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            successCallback({ latitude, longitude });
          },
          error => {
            errorCallback({ message: error.message });
          }
        );
      } else {
        errorCallback({ message: "Geolocation is not supported by this browser." });
      }
    }
  }, []);

  if (error) {
    return <div>Error fetching location: {error.message}</div>;
  }

  if (!location) {
    return <div>Requesting location permissions...</div>;
  }

  return (
    <div>
      Location: Latitude {location.latitude}, Longitude {location.longitude}
    </div>
  );
};

export default LocationComponent;

