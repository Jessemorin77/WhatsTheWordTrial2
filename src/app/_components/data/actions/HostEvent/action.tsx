"use server"
import { db } from "../../../../../server/db"
import { getServerAuthSession } from "~/server/auth";

export type EventErrorState = {
  error: string | undefined
}


export async function createEventAction(previousState: EventErrorState, formData: FormData) {

  const session = await getServerAuthSession();

  const rawFormData = {
    Image: formData.get("imageUrl") as string,
    title: formData.get("title") as string,
    eventType: formData.get("eventType") as string,
    time: formData.get("time") as string,
    location: formData.get("location") as string,
    description: formData.get("description") as string,
    cityState: formData.get("cityState") as string,
    school: formData.get("school") as string,
  };
  console.log("raw formData: ", rawFormData);

  if (!rawFormData) {
    console.log("Form Data null")
    return {
        error: "FormData Null"
    }
  }
  if(rawFormData.description == ''){
    return{
      error: "data undefined"
    }
  }
  if (rawFormData) {
    try {
      await db.event.create({
        data: {
          description: rawFormData.description,
          school: rawFormData.school,
          eventType: rawFormData.eventType,
          location: rawFormData.location,
          time: rawFormData.time,
          title: rawFormData.title,
          image: rawFormData.Image,
          hostId: String(session?.user.id)
        }
      })
      return{
        error: "submitted"
      }
    } catch (e) {
      console.error(e)
      return{
        error: 'error in form submit'
      }
    }
  }

}
