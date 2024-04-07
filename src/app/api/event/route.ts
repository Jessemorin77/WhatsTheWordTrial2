import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db';

export async function POST(req: NextRequest) {
  console.log("endpoint hit")
  try {
    const requestData = await req.json();
    const event = await db.event.findUnique({
      where: {
        id: Number(requestData)
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
    console.log("event from [id]: ", event)
    return NextResponse.json(event)
  } catch (error) {
    console.error('Failed to fetch event:', error);

    return new NextResponse('Failed to fetch event', { status: 500 });
  }
}
