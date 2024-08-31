import { getUserEvents } from '../_components/data/data-functions/MyEvents'
import Image from "next/image"
import Link from "next/link"
import {deleteEvent} from "../_components/data/actions/MyEvents/action"

export default async function MyEvents() {
  const events = await getUserEvents()
  return (
    <div>
      <Link href="/MyEvents/HostEvent" className="btn">HostEvent</Link>
      <div>
        {events.map((event) => (
          <div>
              <div key={event.id}>
                <div className="flex flex-col">
            <Link href={`/MyEvents/${event.id}`}>
                  <div className="relative w-full h-72">
                    {/*If No Image display Nothing*/}
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
                  <div>
                    <h1 className="text-xl">
                      <span>{event.title}</span>
                    </h1>
                  </div>
                  <div>{event.description}</div>
                  <div>{event.status}</div>
            </Link>
                  <div className="flex justify-center">
                    <form action={deleteEvent}>
                      <button
                        className="mr-5 text-black bg-white p-1 rounded-xl" 
                       type="submit"
                      >
                        Delete Event
                      </button>
                      <input name="id" value={event.id} type="hidden"/>
                    </form>
                    <Link
                      className="mr-5 text-black bg-white p-1 rounded-xl"
                      href={`/MyEvents/EditEvent/${event.id}`}
                    >
                      Edit Event
                    </Link> 
                  </div>
                </div>
              </div>


          </div>
        ))
        }

      </div >
    </div >
  )
}
