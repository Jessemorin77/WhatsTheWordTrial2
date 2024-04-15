'use client'
import Image from "next/image"

export function ListEvent({event}){
  return(
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">Edit Event</h1>
        </div>
        <div className="relative w-full h-72 mt-10">
        {/*If No Image display Nothing*/}
        {event?.image ?
          <div>
            <Image
              src={event.image}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          :

          <div>

          </div>
        }
        </div>
        <div className="text-2xl my-10">
          <h1>Title: {event.title}</h1>
          <h1>Description: </h1>
          <h1>{event.description}</h1>
          <h1>Time: {event.time}</h1>
          <h1>Location: {event.location}</h1>
          <h1>Type of Event: {event.eventType}</h1>
          <h1>City and State: {event.cityState}</h1>
          <h1>Event Status: {event.status}</h1>
          <h1>School: {event.school}</h1>
        </div>
      </div>

  )
}
