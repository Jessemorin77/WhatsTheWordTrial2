import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

export async function profileData() {
  const session = await getServerAuthSession();
  return(

  db.user.findUnique({
    where: {
      id: session?.user.id,
    },
  })
  )
}
