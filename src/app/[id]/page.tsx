import { fetchEvent } from "../_components/data/fetch/getEventById"
import Image from "next/image";
import { getEvent } from "./_data"
import { sendChat } from "./_action"

export default async function event({ params }: { params: { id: number } }) {
  const id = params.id
  const event = await getEvent(id)
  console.log("event: ", event)
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
      <div>
        <h1>Chats:</h1>
        {event.chats && event.chats.length > 0 ? (
          event.chats.map((chat, index) => (
            <p key={index} className="">{chat.content}</p>
          ))
        ) : (
          <p>No chats available for this event.</p>
        )}
        <form action={sendChat}>
          <input type="text" name="chat" placeholder="sent chat" />
          <input type="hidden" name="id" value={event.id} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>Reviews: </h1>
        {event?.reviews && event.reviews.length > 0 ? (
          event.reviews.map((review, index) => (
            <div key={index} className="">
              <div className="flex bg-white text-black p-2 max-w-sm rounded-lg m-5">
                <p className="">{review.rating}/10</p>
                <p>{review.content}</p>

              </div>
            </div>
          ))
        ) : (
          <p>No chats available for this event.</p>
        )}
      </div>
    </div>
  )
}
