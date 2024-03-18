import { db } from '~/server/db';
export async function getEvent(id: number){

    const event = await db.event.findUnique({
      where: {
        id: Number(id)
      },
      include:{
        host: {
          select:{
            name: true,
          }
        },
      reviews: true,
        chats: true,
      },
    })
  return event
}
