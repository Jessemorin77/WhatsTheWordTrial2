'use client'
import { useState } from "react"
import { Form } from "./Form"
import { useFormState } from "react-dom"
import {editEvent} from "./_action"

type State = {
  message: string | null;
};


export function ClientEventForm({ event }) {
  const initialState = { message: null };
  const [state, editAction] = useFormState<State, FormData>(editEvent, initialState)

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
      {Form({event, setCityState, setSchool, setImageUrl, onClientUploadComplete, cityState, imageUrl,school, state, editAction})}
    </div>
  )
}
