import { useState } from 'react';

import { Container } from "./upload.styles";

function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Replace 'YOUR_CATAPI_UPLOAD_URL' with the actual endpoint for file upload on CatAPI
      const response = await fetch('YOUR_CATAPI_UPLOAD_URL', {
        method: 'POST',
        body: formData,
        headers: {
          // Replace 'YOUR_API_KEY' with your actual CatAPI key
          'x-api-key': 'YOUR_API_KEY',
        },
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const responseData = await response.json();

      setUploading(false);
      setUploadedUrl(responseData.url);
    } catch (error) {
      setUploading(false);
      setError('An error occurred while uploading the file');
      console.error('Upload error:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {uploadedUrl && (
        <div>
          <p>File uploaded successfully!</p>
          <img src={uploadedUrl} alt="Uploaded Cat" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default Upload;