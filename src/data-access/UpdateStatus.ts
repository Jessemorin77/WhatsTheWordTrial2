import {db} from "~/server/db"

export const StatusActive = async (eventId: number) => {
  if(!eventId || typeof eventId !== 'number'){
    console.error("Invalid eventId:", eventId);
    return{
      success: false
    }
  }

  db.event.update({
    where: {
      id: eventId
    },
    data: {
      status: "Active"
    }
  })
  .then(result => {
    console.log("Update successful:", result);
    return {
        success: true,
        result
      };
  })
  .catch(error => {
    console.error("Error updating event:", error);
    return{
        success: false
      }
  })
}


export const StatusPending = async (eventId: number) => {

  if(!eventId || typeof eventId !== 'number'){
    console.error("Invalid eventId:", eventId);
    return{
      success: false
    }
  }

  db.event.update({
    where: {
      id: eventId
    },
    data: {
      status: "Pending"
    }
  })
  .then(result => {
    console.log("Update successful:", result);
    return {
        success: true,
        result
      };
  })
  .catch(error => {
    console.error("Error updating event:", error);
    return{
        success: false
      }
  })
}


export const StatusOver = async (eventId: number) => {

  if(!eventId || typeof eventId !== 'number'){
    console.error("Invalid eventId:", eventId);
    return{
      success: false
    }
  }

  db.event.update({
    where: {
      id: eventId
    },
    data: {
      status: "Over"
    }
  })
  .then(result => {
    console.log("Update successful:", result);
    return {
        success: true,
        result
      };
  })
  .catch(error => {
    console.error("Error updating event:", error);
    return{
        success: false
      }
  })
}
