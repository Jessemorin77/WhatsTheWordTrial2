import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";
import Autocomplete from "react-google-autocomplete";
import { env } from "~/env";

interface Place {
  formatted_address: string;
}

interface AutoCompleteProps {
  onPlaceSubmit: (cityState: string) => void;
}

export const AutoComplete = forwardRef(({ onPlaceSubmit }: AutoCompleteProps, ref) => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const autocompleteRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    resetInput: () => {
      if (autocompleteRef.current) {
        // Attempt to directly manipulate the input if the component exposes it
        autocompleteRef.current.value = '';
      }
    }
  }));

  const handlePlaceSelect = (place: Partial<Place>) => {
    if (place && typeof place.formatted_address === "string") {
      setSelectedPlace({ formatted_address: place.formatted_address });
      onPlaceSubmit(place.formatted_address);
    } else {
      console.log("Place selected does not have a formatted address.");
    }
  };

  return (
    <div>
      <Autocomplete
        className="input w-96"
        apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API}
        onPlaceSelected={handlePlaceSelect}
        ref={autocompleteRef}
      />
    </div>
  );
});

