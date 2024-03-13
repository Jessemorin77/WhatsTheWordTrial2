'use server'
import { db } from '~/server/db';
import {redirect} from 'next/navigation'

export async function deleteEvent(formData: FormData) {
  const id = formData.get("id") as string
  await db.event.delete({
    where: {
      id: Number(id)
    }
  })
  redirect('/MyEvents')
}
