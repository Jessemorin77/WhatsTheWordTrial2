// db-access/events.js
import { db } from "~/server/db";

export const CreateEvent = async (eventData, userId: string) => {
  try {
    const result = await db.event.create({
      data: {
        ...eventData,
        hostId: userId
      }
    });
    return {
      success: true,
      result,
      message: "Success"
    };
  } catch (error) {
    console.error("Failed", error);
    return {
      success: false,
      message: "Error creating event"
    };
  }
}

