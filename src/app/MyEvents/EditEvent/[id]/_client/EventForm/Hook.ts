'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { editEvent } from './_action';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';

type State = {
  message: string | null;
};

export function Hook(id) {
  const initialState = { message: null };
  const [state, editAction] = useFormState<State, FormData>(
    editEvent,
    initialState,
    
  );

  const [cityState, setCityState] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [imageUrl, setImageUrl] = useState('');

  const onClientUploadComplete = (res) => {
    const fileData = res[0];
    if (fileData && fileData.url) {
      setImageUrl(fileData.url);
    }
  };

  const router = useRouter();

  if (state.message == "Event Updated"){

    //revalidatePath(`/MyEvents/EditEvent/${id}`)
    //router.push(`/MyEvents/EditEvent/${id}`)
  }

  return {
    setCityState,
    setSchool,
    setImageUrl,
    onClientUploadComplete,
    cityState,
    imageUrl,
    school,
    state,
    editAction,
  };
}
