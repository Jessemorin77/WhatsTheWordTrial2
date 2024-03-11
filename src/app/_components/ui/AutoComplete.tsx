import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { env } from "~/env";

// Define the minimal structure for the Place object.
interface Place {
  formatted_address: string;
}

// Defining the props type for the component.
interface AutoCompleteProps {
  onPlaceSubmit: (cityState: string) => void;
}

export function AutoComplete({ onPlaceSubmit }: AutoCompleteProps) {
  // useState with a type for the state variable.
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

 const handlePlaceSelect = (place: Partial<Place>) => {
  // Ensure the place object exists and has a 'formatted_address' property
  if (place && typeof place.formatted_address === "string") {
    setSelectedPlace({ formatted_address: place.formatted_address });
    onPlaceSubmit(place.formatted_address); // Directly use the formatted address
  } else {
    // Handle the case where 'place' does not have the expected property
    // This could be a fallback action or simply ignoring the event
    console.log("Place selected does not have a formatted address.");
  }
};



  return (
    <div>
      <Autocomplete
        className="input w-96"
        apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API}
        onPlaceSelected={handlePlaceSelect} // TypeScript might complain about mismatched types, hence 'as any' is a workaround.
      />
    </div>
  );
}

