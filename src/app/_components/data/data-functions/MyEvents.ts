import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

export async function getUserEvents() {
  const session = await getServerAuthSession();
  return db.event.findMany({
    where: {
      hostId: session?.user.id,
    },
  });
}

export async function getUserEventWithId(id: number){
 return db.event.findUnique({
    where: {
      id: Number(id),
    }
  }) 
}
