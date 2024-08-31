import { getUserEventWithId } from "../../_components/data/data-functions/MyEvents"
import Image from "next/image";
import Link from "next/link"
import {statusActive, statusOver, statusPending} from "./_actions"


export default async function id({ params }: { params: { id: number } }) {
  //need to restructure with hook
  const id = params.id
  const event = await getUserEventWithId(id)
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-72">
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
      <div>
        <Link
          className="mr-5 text-black bg-white p-1 rounded-xl"
          href={`/MyEvents/EditEvent/${id}`}
        >
          Edit Event
        </Link>
      </div>
      <div>
        <h1>Title: {event?.title}</h1>
        <h1>Location: {event?.location}</h1>
        <h1>Time: {event?.time}</h1>
        <h1>City, State: {event?.cityState}</h1>
        <h1>Status: {event?.status}</h1>
        <h1>School: {event?.school}</h1>
        <h1>Description: {event?.description}</h1>
        <h1>Host: {event?.host ? event?.host.name : 'Unknown'}</h1>
      </div>
      <div className="flex justify-center">
        <form action={statusActive}>
          <button type="submit">
            Active
          </button>
          <input type="hidden" name="id" value={Number(id)}/>
        </form>
        <form action={statusPending}>
          <button>
            Pending
          </button>
          <input type="hidden" name="id" value={Number(id)}/>
        </form>
        <form action={statusOver}>
          <button>
            Over
          </button>
          <input type="hidden" name="id" value={Number(id)}/>
        </form>
      </div>
    </div>
  )
}
