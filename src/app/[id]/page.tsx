import { fetchEvent } from "../_components/data/fetch/getEventById"
import Image from "next/image";

export default async function event({ params }: { params: { id: number } }) {
  const id = params.id
  const event = await fetchEvent(id)
  console.log(event)
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-72">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div>
        <h1>Title: {event.title}</h1>
        <h1>Location: {event.location}</h1>
        <h1>Time: {event.time}</h1>
        <h1>City, State: {event.cityState}</h1>
        <h1>Status: {event.status}</h1>
        <h1>School: {event.school}</h1>
        <h1>Description: {event.description}</h1>
<h1>Host: {event.host ? event.host.name : 'Unknown'}</h1>      

      </div>
    </div>
  )
}
