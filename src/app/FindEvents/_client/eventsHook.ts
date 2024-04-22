'use client'
import { useState, useRef } from 'react';
import { fetchEvents } from './fetchEvents';

export function useEventHook(router) {
  const [location, setLocation] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  const autoCompleteRef = useRef<any>(null);
  const schoolModelRef = useRef<any>(null);

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
    location,
    setLocation,
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

