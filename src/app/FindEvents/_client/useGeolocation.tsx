// hooks/useGeolocation.js
import { useState, useEffect } from 'react';
import reverseGeocode from './geocode';

const useGeolocation = () => {
    const [formattedAddress, setFormattedAddress] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const geo = navigator.geolocation;

        if (!geo) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        geo.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Turn the coordincates to a formatted address
            const address = await reverseGeocode(latitude, longitude);

            if (address) {
                setFormattedAddress(address);
                console.log(formattedAddress)
            } else {
                setError("Failed to retrieve address");
            }

        }, (error) => {
            setError(`Unable to retrieve your location: ${error.message}`);
        });
    }, []);

    return { formattedAddress, error };
};

export default useGeolocation;

