"use client"
import { Form } from "./Form"
import { Hook } from "./Hook"


export function EventForm({ event, id }) {

  const {
    setCityState, 
    setSchool, 
    setImageUrl, 
    onClientUploadComplete, 
    cityState, 
    imageUrl, 
    school, 
    state, 
    editAction
  } = Hook(id)

  return (
    Form({
      event, 
      setCityState, 
      setSchool, 
      setImageUrl, 
      onClientUploadComplete, 
      cityState, 
      imageUrl, 
      school, 
      state, 
      editAction
    })
  )
}

