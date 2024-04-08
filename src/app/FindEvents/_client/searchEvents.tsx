"use client"
import { AutoComplete } from "~/app/_components/ui/AutoComplete";
import { SchoolModel } from "~/app/_components/ui/SchoolModel";

export default function searchEvents(handleFormSubmit, setLocation, setSchool, location, school) {
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleFormSubmit}>
        <div className="mt-12">
          <div>
            <p>Current Location: {location ? location : "No Location Set"}</p>
          </div>
          <AutoComplete
            onPlaceSubmit={(cityState: string) => {
              setLocation(cityState)
              console.log(cityState)
            }}
          />

        </div>
        <div className="">
          <h1>Selected State: {location}</h1>
        </div>
        <div className="mt-10">
          <SchoolModel
            onSchoolSelect={(institution: string) => {
              setSchool(institution)
            }}
          />

        </div>
        <div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-2xl bg-gray-700 px-4 py-1 mt-10 text-lg"
          >
            Search
          </button>
        </div>
      </form>

    </div>

  )
}

