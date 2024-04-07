import Image from "next/image";

export function DisplayEvent({event}) {
  return (
    <div>
      <div className="relative w-full h-72">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="ml-10">
        <h1>Title: {event.title}</h1>
        <h1>Location: {event.location}</h1>
        <h1>Time: {event.time}</h1>
        <h1>City, State: {event.cityState}</h1>
        <h1>Status: {event.status}</h1>
        <h1>School: {event.school}</h1>
        <h1>Host: {event.host ? event.host.name : 'Unknown'}</h1>
        <h1 className="mt-5">Description: {event.description}</h1>
      </div>

    </div>
  )
}
