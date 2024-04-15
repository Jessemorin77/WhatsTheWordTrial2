import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

export async function getEventById(id: number){
 return db.event.findUnique({
    where: {
      id: Number(id),
    }
  }) 
}
