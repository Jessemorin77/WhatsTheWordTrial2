import {getEventById} from "~/data-access/Events"
import {ListEvent} from "./_client/ListEvent"
import {EventForm} from "./_client/EventForm/index"

export default async function Edit({ params }: { params: { id: number } }) {
  const id = params.id
  
  const event = await getEventById(id)

  return(
    <div>
      <ListEvent event={event}/>
      <EventForm event={event} id={id}/>
    </div>
)  
}
