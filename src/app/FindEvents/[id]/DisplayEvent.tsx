import Image from "next/image";

export function DisplayEvent({ event }) {
  return (
<div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <div className="relative w-full h-64 mb-6">
    {event.image ? (
      <Image
        src={event.image}
        alt={event.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    ) : (
      <div className="flex items-center justify-center h-full bg-gray-200 rounded-lg">
        <span className="text-gray-500">No Image Available</span>
      </div>
    )}
  </div>
  <div className="space-y-4">
    <h1 className="text-2xl font-semibold text-gray-800">{event.title}</h1>
    <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
    <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
    <p className="text-gray-600"><strong>City, State:</strong> {event.cityState}</p>
    <p className="text-gray-600"><strong>Status:</strong> {event.status}</p>
    <p className="text-gray-600"><strong>School:</strong> {event.school}</p>
    <p className="text-gray-600"><strong>Host:</strong> {event.host ? event.host.name : 'Unknown'}</p>
    <p className="text-gray-600"><strong>Description:</strong> {event.description}</p>
  </div>
</div>
  )
}
