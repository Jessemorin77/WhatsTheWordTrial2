'use client'
import { env } from "~/env";
import { SchoolModel } from "~/app/_components/ui/SchoolModel";
import { useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { UploadButton } from "~/app/_components/utils/uploadthing";
import { editEvent } from "./_action"
import Image from "next/image"
import {ListEvent} from "./_listEvent"
export function ClientEventForm({ event }) {
  const [cityState, setCityState] = useState<string>("")
  const [school, setSchool] = useState<string>("")
  const [imageUrl, setImageUrl] = useState("");

  const onClientUploadComplete = (res) => {
    const fileData = res[0];
    if (fileData && fileData.url) {
      setImageUrl(fileData.url);
    }
  };
  return (
    <div>
      <ListEvent event={event}/>
      <form action={editEvent}>
        <h1 className="text-2xl">Edit Event Below: </h1>
        <div className="flex flex-col items-center">
          <h1>Change Image: </h1>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={onClientUploadComplete}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        <h1>New Url: {imageUrl}</h1>
        <input value={imageUrl} name="url" type="hidden" />
        <div>
          <h1>Title: </h1>
          <input name="title" type="text" className="input"/>
        </div>
        <div>
          <h1>Description: </h1>
          <input name="description" type="text" className="input"/>
        </div>
        <div>
          <h1>Location: </h1>
          <input name="location" type="text" className="input"/>
        </div>
        <div>
          <h1>Type of Event: </h1>
          <input name="location" type="text" className="input"/>
        </div>
        <div>
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
          <input name="school" type="hidden" value={cityState}/>
        </div>
        <div>
          <h1>Status: </h1>
          <input name="location" type="text" className="input"/>
        </div>
        <div>
          <h1>School: </h1>
          <SchoolModel
            onSchoolSelect={(institution: string) => {
              setSchool(institution)
            }}
          />
          <input name="school" type="hidden" value={school}/>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}
