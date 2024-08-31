"use client"
import { useState, useRef, useEffect } from 'react';
import { fetchEvents } from './fetchEvents';
import useGeolocation from './useGeolocation';



export function useEventHook(router) {

  const [location, setLocation] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  const autoCompleteRef = useRef<any>(null);
  const schoolModelRef = useRef<any>(null);

  //geolocation hook
  const { formattedAddress, error: geoError } = useGeolocation();
  
  useEffect(() => {
    if(formattedAddress){
      setLocation(formattedAddress)
    }
  }, [formattedAddress])

  // Manage errors from both geolocation and event fetching
  useEffect(() => {
    if (geoError) {
      setError(geoError);
    }
  }, [geoError]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ((location && school) || (!location && !school)) {
      setError('Please fill in exactly one field');
      clearFormData();
    } else {
      try {
        const returnedEvents = await fetchEvents(school, location);
        if (returnedEvents.length === 0) { // Check if the array is empty
          setError('No Events Found');
          setEvents([]);
          setTimeout(() => setError(''), 5000); // Clear error message after delay
        } else {
          setEvents(returnedEvents);
          setError('');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to load events');
      }
    }
  };

  const handleReset = () => {
    setError('Form Reset');
    clearFormData();
  };

  // Clear form data and reset input fields
  const clearFormData = () => {
    setEvents([]);
    setLocation('');
    setSchool('');
    if (autoCompleteRef.current) {
      autoCompleteRef.current.resetInput();
    }
    if (schoolModelRef.current) {
      schoolModelRef.current.resetInput();
    }
    setTimeout(() => setError(''), 2000);
  }

  return {
    setLocation,
    location,
    school,
    setSchool,
    events,
    error,
    handleFormSubmit,
    autoCompleteRef,
    schoolModelRef,
    handleReset,
  };
}

