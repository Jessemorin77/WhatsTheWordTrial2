'use server'
import { db } from '~/server/db';
import { revalidatePath } from 'next/cache'

export async function deleteEvent(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    // Attempt to delete the event
    await db.event.delete({
      where: {
        id: Number(id)
      }
    });

    // Revalidate the page to update frontend after deletion
    revalidatePath('/MyEvents');
  } catch (error) {
    console.error("Error deleting event:", error);
    // Handle the error appropriately
    throw error;
  }
}

