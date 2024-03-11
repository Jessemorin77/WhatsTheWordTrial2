import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db';

export async function POST(req: NextRequest) {
  console.log("pingggg")
  try {
    const requestData = await req.json();
    console.log("$$$api: ", requestData)
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
    return NextResponse.json(event)
  } catch (error) {
    console.error('Failed to fetch event:', error);

    return new NextResponse('Failed to fetch event', { status: 500 });
  }
}
