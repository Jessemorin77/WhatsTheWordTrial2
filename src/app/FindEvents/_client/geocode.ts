// utils/geocode.js
import { env } from "~/env";

async function reverseGeocode(latitude, longitude) {
  const apiKey = env.NEXT_PUBLIC_GOOGLE_MAPS_API;  // Ensure your API key is securely stored
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data)

    if (data.status === "OK") {
      // Find the formatted address that matches the locality or political type
      const address = data.results.find(result => result.types.includes('locality') || result.types.includes('political'));
      console.log("formatted address: ", address.formatted_address)
      return address.formatted_address;
    } else {
      console.error("Geocoding failed: " + data.status);
      return null;
    }
  } catch (error) {
    console.error("Error occurred during geocoding: ", error);
    return null;
  }
}

export default reverseGeocode;

