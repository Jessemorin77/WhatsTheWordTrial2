'use client'
import Autocomplete from "react-google-autocomplete";
import { SchoolModel } from "~/app/_components/ui/SchoolModel";
import { UploadButton } from "~/app/_components/utils/uploadthing";
import { env } from "~/env";
import { CreateEventHook } from "./Hook";
import {ImageUploadComponent} from "~/app/_components/ui/ImageUploadComponent"
export default function CreateEvent() {
  const {
    wrappedAction,
    formState,
    imageUrl,
    setCityState,
    cityState,
    setSchool,
    school,
    setImageUrl,
    onClientUploadComplete,
    onUploadError,
    handleImageUploadError,
    error,
  } = CreateEventHook()

  return (
    <form action={wrappedAction}
      className="flex flex-col items-center"
    >
      <div className="flex justify-center mt-2">
        <h1 className="text-4xl">Host Event</h1>
      </div>
      <div>
         {imageUrl ? (
          <div>
            <p>Image Uploaded:</p>
            <img src={imageUrl} alt="Uploaded Event" className="w-full max-w-xs"/>
          </div>
        ) : (
          <ImageUploadComponent
            onUploadComplete={setImageUrl}
            onUploadError={handleImageUploadError}
          />
        )}
        <input type="hidden" name="imageUrl" value={imageUrl} />
        <p>ImageUrl: {imageUrl}</p>      </div>
      <div className="mb-3">
        <label htmlFor="title" className="block text-lg">
          Title:
        </label>
        <input
          name="title"
          type="text"
          className="input input-primary w-full max-w-xs"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="event-type" className="block text-lg">
          Event Type:
        </label>
        <input
          type="text"
          className="input input-primary w-full max-w-xs"
          name="eventType"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time-picker" className="block text-lg">
          Time:
        </label>
        <input
          type="time"
          className="input input-primary w-full max-w-xs"
          name="time"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="block text-lg">
          Location of Event(alias):
        </label>
        <input
          type="text"
          className="input input-primary w-full max-w-xs"
          name="location"
        />
      </div>
      <div>
        <label htmlFor="title" className="block text-lg">
          City and State
        </label>
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
        <input type="hidden" name="cityState" value={cityState} />
      </div>
      <div className=" mt-3">
        <label htmlFor="description" className="block text-lg">
          Description:
        </label>
        <textarea
          className="textarea textarea-primary w-full max-w-lg"
          name="description"
        />
      </div>
      <div className=" my-10">
        <SchoolModel onSchoolSelect={(institution: string) => {
          setSchool(institution)
          console.log(institution)
        }
        } />
        <input type="hidden" name="school" value={school} />
      </div>
      {formState.error && (
        <div className="text-red-400">{formState.error}</div>
      )}
      {error && <p className="text-red-400">{error}</p>}   

      <button type="submit" className="btn btn-primary mt-4 mb-10">
        Create Event
      </button>
    </form>
  )
}
