"use client"
import listEvents from "./listEvents"
import searchEvents from "./searchEvents"
import { useEventHook } from "./eventsHook"
import { useRouter } from "next/navigation"

export default function Events() {
  const router = useRouter();
  const {
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
  } = useEventHook(router);

  return (
    <div>
      {searchEvents(handleFormSubmit, setLocation, setSchool, location, school, autoCompleteRef, schoolModelRef, handleReset)}
      {error && <p className="text-red-300">{error}</p>}
      {listEvents(school, events, location)}
    </div>
  )
}
