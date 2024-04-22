"use server"
import { getServerAuthSession } from "~/server/auth";
import { revalidatePath } from 'next/cache'
import { CreateEvent } from "~/data-access/CreateEvent"

type State = {
  message: string | null;
};

export async function createEventAction(prevState: State, formData: FormData) {

  const session = await getServerAuthSession();

  const rawFormData = {
    image: formData.get("imageUrl") as string,
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
        message: "FormData Null"
    }
  }

  if (!rawFormData.description || !rawFormData.title || !rawFormData.eventType || !rawFormData.time || !rawFormData.cityState ) {
    return { message: "Missing" };
  }
  
  const result = await CreateEvent(rawFormData, String(session?.user.id))

  if(result.success){
    //revalidatePath('/MyEvents');
    return { message: result.message }
  } else {
    return { message: result.message };
  }
} 
