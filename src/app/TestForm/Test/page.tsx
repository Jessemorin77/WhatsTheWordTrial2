"use client"
import { useFormState } from "react-dom"

type State = {
  message: string | null;
};


export default function TestForm() {
  const initialState = { message: null };
  const [state, formAction] = useFormState<State, FormData>(action, initialState)

  return (
    <div>
      <form action={formAction}>
        <input type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
      <p>Status: {state.message}</p>
    </div>
  )
}

async function action(prevState: State, formData: FormData) {
  const text = formData.get("text")
  //do action
  if(text == "n"){
    return{
      message: "failed"
    }
  }
  return {
    message: "Success"
  }
}

type state = {
  message: string | null 
}



export async function action2(formData: FormData){
 const value1 = formData.get("value1")
  
  return{
    message: "hello"
  }

}

function TestForm3(){
  const prevState = { message: null }
  const [state, formAction] = useFormState<State, FormData>(action2, prevState )

  return(
    <div>
      <form>
        <input type="text" name="value1" />
        <button type="submit"/>
      </form>
    </div>
  )
}

