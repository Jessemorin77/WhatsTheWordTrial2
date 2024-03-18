"use server"
import { db } from '~/server/db';
import {redirect} from 'next/navigation'
import { getServerAuthSession } from '~/server/auth';

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

export async function createRating(formData: FormData){
  const content = formData.get("content")
  const rating = formData.get("rating")
  const id = formData.get("eventId")
  const session = await getServerAuthSession();

  await db.review.create({
  data: {
      rating: Number(rating),
      content: String(content),
      eventId: Number(id),
      userId: String(session?.user.id),
  },
});
  redirect(`/${id}`)
}
