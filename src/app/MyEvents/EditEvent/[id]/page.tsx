import { getUserEventWithId } from "~/app/_components/data/data-functions/MyEvents"
import {ListEvent} from "./_listEvent"
import {ClientEventForm} from "./ClientEventForm"

export default async function Edit({ params }: { params: { id: number } }) {
  const id = params.id
  
  const event = await getUserEventWithId(id)

  return(
    <div>
      <ListEvent event={event}/>
      <ClientEventForm event={event}/>
    </div>
)  
}
