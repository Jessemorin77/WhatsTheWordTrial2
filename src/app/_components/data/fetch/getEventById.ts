export async function fetchEvent(id: number) {
  console.log("***ID", id)
  const response = await fetch('http://localhost:3000/api/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  });
  
  if (!response.ok){
    throw new Error('Failed to fetch event');
    console.log(response)
  } 
  return response.json();
}
