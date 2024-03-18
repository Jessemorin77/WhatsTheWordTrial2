"use server"
import { db } from '~/server/db';
import {redirect} from 'next/navigation'

export async function sendChat(formData: FormData){
  const chat = formData.get("chat")
  const id = formData.get("id")
  await db.chat.create({
  data: {
    content: String(chat),
    eventId: Number(id), // Assuming '1' is the ID of the event you want to add a chat to
  },
});
  redirect(`/${id}`)
}
