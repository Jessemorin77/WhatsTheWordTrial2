import { sendChat } from "./_action"

export function SendChats({event}){
  return(
    <div className="mt-20 ml-10">
        <h1>Chats:</h1>
        {event.chats && event.chats.length > 0 ? (
          event.chats.map((chat, index) => (
            <p key={index} className="ml-5 mt-5">Message: {chat.content}</p>
          ))
        ) : (
          <p>No chats available for this event.</p>
        )}
        <form action={sendChat} className="flex justify-center mt-5">
          <input type="text" name="chat" placeholder="sent chat" className="input" />
          <input type="hidden" name="id" value={event.id} />
          <button type="submit" className="btn ml-5">Submit</button>
        </form>
      </div>
  )
}
