"use client"
import { UploadButton } from "~/app/_components/utils/uploadthing";
import Autocomplete from "react-google-autocomplete";
import { SchoolModel } from "~/app/_components/ui/SchoolModel";
import { env } from "~/env";

export function Form({event, setCityState, setSchool, setImageUrl, onClientUploadComplete, cityState, imageUrl,school, state, editAction  }) {
  return (
    <div>
      <form action={editAction}>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={onClientUploadComplete}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <h1>New Url: {imageUrl}</h1>
        <input value={event.id} name="id" type="hidden" />
        <input value={imageUrl} name="url" type="hidden" />
        <input name="title" type="text" className="input" />
        <input name="description" type="text" className="input" />
        <input name="location" type="text" className="input" />
        <input name="eventType" type="text" className="input" />
        <Autocomplete
          className="input input-primary"
          id="cityState"
          apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API}
          onPlaceSelected={(cityState) => {
            const myCityState: string = cityState.formatted_address
            setCityState(myCityState)
            console.log(cityState)
          }}
        />
        <input name="cityState" type="hidden" value={cityState} />
        <input name="status" type="text" className="input" />
        <SchoolModel
          onSchoolSelect={(institution: string) => {
            setSchool(institution)
          }}
        />
        <input name="school" type="hidden" value={school} />
        <p className="text-white">{state?.message}</p>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}
