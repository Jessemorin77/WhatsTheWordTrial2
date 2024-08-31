import { useState, useEffect, useCallback } from 'react';
import { useFormState } from 'react-dom';
import { createEventAction } from './_action';
import { useRouter } from 'next/navigation';

type State = {
  message: string | null;
};

export function CreateEventHook() {
  const initialState = { message: null }
  const [formState, wrappedAction] = useFormState<State, FormData>(
    createEventAction,
    initialState
  );

  const [cityState, setCityState] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('')
  const [imageError, setImageError] = useState<string>('');
  const router = useRouter();


  useEffect(() => {
    if (formState.message === 'Success') {

      const timer = setTimeout(() => {
        router.push('/MyEvents')
      }, 3500)
      setError("Event Created");
      return () => clearTimeout(timer);
    } else if (formState.message === 'Failed') {
      setError("Error Creating Event Try Again")
    } else if (formState.message === 'Missing') {
      setError("Missing required fields")
    }
  }, [formState.message]);

  const onClientUploadComplete = useCallback((url: string) => {
    setImageUrl(url);
    console.log('Image uploaded and URL set:', url);
  }, []);

  const onUploadError = useCallback((errMsg: string) => {
    setImageError(errMsg);
    console.error('Upload error:', errMsg);
  }, []);

  const handleImageUploadError = (errMsg: Error) => {
    setError(errMsg);  // Assuming setError updates the component's error state
  };


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
    error,
    handleImageUploadError,
    setImageUrl,
  };
}
