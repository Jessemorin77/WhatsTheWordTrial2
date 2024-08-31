import { sendChat } from "./_action"

export function SendChats({event}){
  return(
<div className="mx-auto mt-10">
  <h2 className="text-xl font-semibold text-white mb-4">Chats:</h2>
  <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
    {event.chats && event.chats.length > 0 ? (
      event.chats.map((chat, index) => (
        <div key={index} className="mb-3 p-2 bg-white rounded-md shadow-sm">
          <p className="text-gray-700">Message: {chat.content}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No chats available for this event.</p>
    )}
  </div>
  <form action={sendChat} className="flex items-center mt-5">
    <input 
      type="text" 
      name="chat" 
      placeholder="Send a chat" 
      className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
    />
    <input type="hidden" name="id" value={event.id} />
    <button type="submit" className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none">
      Submit
    </button>
  </form>
</div>
  )
}
