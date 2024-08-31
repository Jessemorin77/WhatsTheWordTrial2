import { createRating } from "./_action"
export function Reviews({event}){
  return(
<div className="mt-10">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Reviews:</h2>
  <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
    {event.reviews && event.reviews.length > 0 ? (
      event.reviews.map((review, index) => (
        <div key={index} className="mb-3 p-2 bg-white rounded-md shadow-sm">
          <p className="text-gray-700"><strong>Rating:</strong> {review.rating}/5</p>
          <p className="text-gray-700"><strong>Review:</strong> {review.content}</p>
          <p className="text-gray-600"><strong>User:</strong> {review.user.name}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No reviews available for this event.</p>
    )}
  </div>
  <form action={createRating} className="flex flex-col items-center mt-5 space-y-3">
    <textarea 
      name="review" 
      placeholder="Write a review" 
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
      rows="3"
    ></textarea>
    <input type="hidden" name="id" value={event.id} />
    <input 
      type="number" 
      name="rating" 
      placeholder="Rating (1-5)" 
      min="1" 
      max="5" 
      className="w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
    />
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none">
      Submit
    </button>
  </form>
</div>
  )
}

/*
 
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
 * */
