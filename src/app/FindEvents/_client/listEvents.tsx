"use client"
import Image from "next/image";
import Link from 'next/link'

export default function listEvents(school: string, events, location: string) {
  return (
    <div>
      <div>
        Events in: {location ? location : school}
      </div>
      {events.length > 0 && (
        <ul className="mt-24">
          {events.map((event, index) => (
            <li key={index}>
              <Link href={`/FindEvents/${event.id}`}>
                <div className="flex flex-col items-center w-full">
                  {/* Make the card take up more of the screen on mobile */}
                  <div className="w-full mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                    <div className="relative w-full h-72">
                      {event.image ? 
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
                    <div className="bg-black w-full p-4 mt-4 rounded-b-xl">
                      <h1>Title: {event.title}</h1>
                      <h1>Event Type: {event.eventType}</h1>
                      <h1>Location: {event.cityState}</h1>
                      <h1>Status: {event.status}</h1>
                    </div>
                  </div>
                </div>

              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

