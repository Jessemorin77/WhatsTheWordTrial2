import React, { useState } from 'react';
import { UploadButton } from '~/app/_components/utils/uploadthing'; // Adjust this path based on your project structure


export function ImageUploadComponent({ onUploadComplete, onUploadError }) {
    const [imageUrl, setImageUrl] = useState('');
    const [uploadError, setUploadError] = useState('');

    const onClientUploadComplete = (res) => {
        console.log("Files: ", res);
        if (res.length > 0 && res[0].url) {
            setImageUrl(res[0].url);
            onUploadComplete(res[0].url);  // Pass the URL up to the parent component
            alert("Upload Completed");
        } else {
            alert("Upload completed, but no image URL was found.");
            setUploadError("No image URL provided.");
            onUploadError("No image URL provided.");
        }
    };

    return (
        <div>
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={onClientUploadComplete}
                onUploadError={onUploadError}
            />
            {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
            {uploadError && <p>Error: {uploadError}</p>}
        </div>
    );
}


