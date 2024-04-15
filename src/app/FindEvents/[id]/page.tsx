import { getEvent } from "./_data"
import {DisplayEvent} from "./DisplayEvent"
import {SendChats} from "./SendChats"
import {Reviews} from "./Reviews"

export default async function event({ params }: { params: { id: number } }) {
  const id = params.id
  const event = await getEvent(id)
  console.log("event: ", event)
  return (
    <div className="flex flex-col">
      {/*Display Data*/}
      <DisplayEvent event={event}/>
      {/*Send Chats*/}
      <SendChats event={event}/>
      {/*Reviews*/}
      <Reviews event={event}/>      
    </div>
  )
}
