import { getUserEventWithId } from "~/app/_components/data/data-functions/MyEvents"
import {ClientEventForm} from "./ClientEventForm"

export default async function Edit({ params }: { params: { id: number } }) {
  const id = params.id
  
  const event = await getUserEventWithId(id)

  return(
    <ClientEventForm event={event}/>
)  
}
