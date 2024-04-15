"use server"
import { db } from '~/server/db';
import {redirect} from 'next/navigation'

type State = {
  message: string | null;
};

export async function editEvent(prevState: State, formData: FormData) {
  // Assuming the ID is an integer; adjust accordingly if your ID type is different
  const eventId = parseInt(formData.get("id") as string);

  // Extracting form data and initializing the update object
  const fieldsToUpdate: any = {}; // Use an appropriate type instead of 'any' if possible

  // Conditionally adding fields to the update object if they exist
  const formFields = ["url", "title", "description", "location", "eventType", "cityState", "status", "school"];
  formFields.forEach(field => {
    const value = formData.get(field);
    if (value) {
      fieldsToUpdate[field] = value as string;
    }
  });

  //if  no fields to update
  if (Object.keys(fieldsToUpdate).length === 0) {
    console.error("No fields provided for update");
    return{
      message: "error"
    }; // Optionally, you might want to throw an error or return a specific response here
  }

  try {
    const updatedEvent = await db.event.update({
      where: { id: eventId },
      data: fieldsToUpdate,
    });

    console.log("PINGGGGGG")
    //manage state
  return{
    message: 'Event Updated'
  }
  } catch (error) {
    // Log and handle error appropriately
    console.error("Failed to update event:", error);
  return{
    message: 'Error Updating Event'
  }

  }
}

