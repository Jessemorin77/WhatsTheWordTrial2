"use server"
import { StatusActive, StatusPending, StatusOver } from "~/data-access/UpdateStatus"
import {revalidatePath} from "next/cache"


export async function statusActive(formData: FormData){
  const eventId = formData.get("id")

  if(!eventId){
    console.error("No Event ID")
    return
  }

  const eventIdNumber = Number(eventId)

  const result = await StatusActive(eventIdNumber)

    revalidatePath(`/MyEvents/${eventId}`);
  if(result && result.success){
    console.log("success")
  } else {
    console.error("Error updating Event Status")
  }

}


export async function statusPending(formData: FormData){
  const eventId = formData.get("id")

  if(!eventId){
    console.error("No Event ID")
    return
  }

  const eventIdNumber = Number(eventId)

  const result = await StatusPending(eventIdNumber)

    revalidatePath(`/MyEvents/${eventId}`);
  if(result && result.success){
    console.log("success")
  } else {
    console.error("Error updating Event Status")
  }

}



export async function statusOver(formData: FormData){
  const eventId = formData.get("id")

  if(!eventId){
    console.error("No Event ID")
    return
  }

  const eventIdNumber = Number(eventId)

  const result = await StatusOver(eventIdNumber)

    revalidatePath(`/MyEvents/${eventId}`);
  if(result && result.success){
    console.log("success")
  } else {
    console.error("Error updating Event Status")
  }

}
