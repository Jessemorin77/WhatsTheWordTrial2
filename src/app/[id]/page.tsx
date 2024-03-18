import { fetchEvent } from "../_components/data/fetch/getEventById"
import Image from "next/image";
import { getEvent } from "./_data"
import { sendChat, createRating } from "./_action"


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
      <div className="mt-20 ml-10">
        <h1>Chats:</h1>
        {event.chats && event.chats.length > 0 ? (
          event.chats.map((chat, index) => (
            <p key={index} className="ml-5 mt-5">Message: {chat.content}</p>
          ))
        ) : (
          <p>No chats available for this event.</p>
        )}
        <form action={sendChat} className="flex justify-center mt-5">
          <input type="text" name="chat" placeholder="sent chat" className="input" />
          <input type="hidden" name="id" value={event.id} />
          <button type="submit" className="btn ml-5">Submit</button>
        </form>
      </div>
      <div className="mt-10">
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
        <div>
          <form action={createRating}>
            <p>Write a review</p>
            <input type="text" name="content" placeholder="content" className="input"/> 
            <input type="number" name="rating" placeholder="rating" className="input"/>
            <input type="hidden" name="eventId" value={event.id}/>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
