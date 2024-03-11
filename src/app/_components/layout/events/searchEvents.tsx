import { AutoComplete } from "../../ui/AutoComplete";
import { SchoolModel } from "../../ui/SchoolModel";

export default function searchEvents(handleFormSubmit, setLocation, setSchool, location) {
  return(
    <div className="flex flex-col items-center">
        <form onSubmit={handleFormSubmit}>
          <div className="mt-12">
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
