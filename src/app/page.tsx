"use client"
import { useRouter } from "next/navigation"
import {useEventForm} from "./_components/hooks/useEventForm"
import listEvents from "./_components/layout/events/listEvents"
import searchEvents from "./_components/layout/events/searchEvents"

export default function HomePage() {
  const router = useRouter();
  const {location, setLocation, school, setSchool, events, error, handleFormSubmit } = useEventForm(router);
  return (
      <div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">What's The Word</h1>
        <h3>find "events" in your area</h3>
      </div>
        {searchEvents(handleFormSubmit, setLocation, setSchool, location)}
        {error && <p className="text-red-300">{error}</p>}
        {listEvents(school, events, location)}
      </div>
  )
}

