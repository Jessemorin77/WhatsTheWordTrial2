import { createRating } from "./_action"
export function Reviews({event}){
  return(

      <div className="mt-10">
        <h1>Reviews: </h1>
        {event?.reviews && event.reviews.length > 0 ? (
          event.reviews.map((review, index) => (
            <div key={index} className="">
              <div className="flex bg-white text-black p-2 max-w-sm rounded-lg m-5">
                <p className="">{review.rating}/10</p>
                <p>{review.content}</p>

              </div>
            </div>
          ))
        ) : (
          <p>No chats available for this event.</p>
        )}
        <div>
          <form action={createRating}>
            <p>Write a review</p>
            <input type="text" name="content" placeholder="content" className="input"/> 
            <input type="number" name="rating" placeholder="rating" className="input"/>
            <input type="hidden" name="eventId" value={event.id}/>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
  )
}
