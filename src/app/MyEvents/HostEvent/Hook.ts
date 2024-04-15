import { useState } from 'react';
import { useFormState } from 'react-dom';
import { createEventAction } from './_action';
import { useRouter } from 'next/navigation';
type State = {
  message: string | null;
};

export function CreateEventHook() {
  const initialState = { message: null}
  const [formState, wrappedAction] = useFormState<State, FormData>(
    createEventAction,
    initialState
  );

  const [cityState, setCityState] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const router = useRouter();

  if (formState.message == 'submitted') {
    console.log('Triggered^^^^^^^^^^^^^^');
    router.push('/MyEvents');
  }


  const onClientUploadComplete = (res) => {
    // Do something with the response
    console.log('Files*****: ', res);
    console.log('Files*****: ', res);
    const fileData = res[0];

    if (fileData && fileData.url) {
      // Now you have the URL of the uploaded file
      console.log('Uploaded file URL:', fileData.url);

      setImageUrl(fileData.url);
      console.log(imageUrl);
      // Do something with the URL, e.g., store it in state or send it to another API
    } else {
      console.log('No URL found in the response');
    }
    alert('Upload Completed');
  };

  const onUploadError = (error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
  }

  return {
    wrappedAction,
    formState,
    imageUrl,
    setCityState,
    cityState,
    setSchool,
    school,
    onClientUploadComplete,
    onUploadError,
  };
}
