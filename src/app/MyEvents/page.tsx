import { getUserEvents } from '../_components/data/data-functions/MyEvents'
import Image from "next/image"
import Link from "next/link"

export default async function MyEvents() {
  const events = await getUserEvents()
  return (
    <div>
      <div>
        {events.map((event) => (
          <div>
            <Link href={`/MyEvents/${event.id}`}>
              <div key={event.id}>
                <Image
                  src={event?.image}
                  width={200}
                  height={200}
                  alt="image not found"
                />
                <div>
                  <h1>
                    Title:
                    <span>{event.title}</span>
                  </h1>
                </div>
                <div>{event.description}</div>
                <div>{event.time}</div>
                <div>{event.location}</div>
                <div>{event.eventType}</div>
                <div>{event.cityState}</div>
                <div>{event.status}</div>
                <div>{event.school}</div>
              </div>

            </Link>

          </div>
        ))}

      </div>
    </div>
  )
}
