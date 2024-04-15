'use client';
import { useState } from 'react';
import { fetchEvents } from './fetchEvents';

export function useEventHook(router) {
  const [location, setLocation] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('HandleFormSubmit: ', location);
    console.log('School', school);

    /*
     *Possible states
      State1: Location: str, school: null
      State2: Location: null, school: str
      State3: true, true
      State4: incorrect format
     * */

    if ((location && school) || (!location && !school)) {
      setError('Please fill in exactly one field');
      setEvents([]);
      router.push('/');
    } else {
      try {
        const returnedEvents = await fetchEvents(school, location);

        if (!returnedEvents) {
          console.log('No Events Returned');
          setError('No Events Found');
        }

        console.log('Returned Events', returnedEvents);

        setEvents(returnedEvents);
      } catch (error) {
        console.error(error);
        setError('Failed to load events');
      }
    }
  };

  return {
    location,
    setLocation,
    school,
    setSchool,
    events,
    error,
    handleFormSubmit,
  };
}
