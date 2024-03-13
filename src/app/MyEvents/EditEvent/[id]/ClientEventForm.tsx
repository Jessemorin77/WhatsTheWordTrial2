'use client'
import { useEffect, useState } from "react";
import { UploadButton } from "~/app/_components/utils/uploadthing";
import { editEvent } from "./_action"

export function ClientEventForm({event}) {
  const [imageUrl, setImageUrl] = useState("");

  const onClientUploadComplete = (res) => {
    const fileData = res[0];
    if (fileData && fileData.url) {
      setImageUrl(fileData.url);
    }
  };
  return (
    <div className="flex flex-col">
      <form action={editEvent}>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={onClientUploadComplete}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <input value={imageUrl} name="url" type="hidden" />
        <h1>ImageUrl: {imageUrl}</h1>
        <button type="submit">Submit</button>
      </form>
      <h1>{event.id}</h1>
    </div>
  )
}
