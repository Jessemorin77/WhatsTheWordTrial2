"use client"
import { UploadButton } from "~/app/_components/utils/uploadthing";
import Autocomplete from "react-google-autocomplete";
import { SchoolModel } from "~/app/_components/ui/SchoolModel";
import { env } from "~/env";

export function Form({ event, setCityState, setSchool, setImageUrl, onClientUploadComplete, cityState, imageUrl, school, state, editAction }) {
  return (
    <div className="">
      <form action={editAction}>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={onClientUploadComplete}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <div className="flex flex-col items-center">
          <h1>New Url: {imageUrl}</h1>
          <input value={event.id} name="id" type="hidden" />
          <input value={imageUrl} name="url" type="hidden" />
          <div className="flex mt-5 ">
            <h1>Title: </h1>
            <input name="title" type="text" className="input" />
          </div>
          <div className="flex mt-5">
            <h1>Description: </h1>
            <input name="description" type="text" className="input" />
          </div>
          <div className="flex mt-5">
            <h1>Location: </h1>
            <input name="location" type="text" className="input" />
          </div>
          <div className="flex mt-5">
            <h1>Event Type: </h1>
            <input name="eventType" type="text" className="input" />
          </div>
          <div className="flex mt-5">
            <h1>City and State: </h1>
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
          </div>
          <div className="flex mt-5">
            <h1>Status: </h1>
            <input name="status" type="text" className="input" />
          </div>
          <div className="flex mt-5">
            <h1>School: </h1>
            <SchoolModel
              onSchoolSelect={(institution: string) => {
                setSchool(institution)
              }}
            />
            <input name="school" type="hidden" value={school} />
          </div>
          <p className="text-white">{state?.message}</p>

        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}
