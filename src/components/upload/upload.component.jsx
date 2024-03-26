import { useState } from 'react';

import UploadImage from '../../assets/images/upload-bg-no-image.png';

import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from '../buttons/textButton/textButton.component';

import { Container, UploadButton, UploadedImage, UploadInput, UploadLabel, UploadMessage } from "./upload.styles";

const Upload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      handleFile(uploadedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile) {
      handleFile(uploadedFile);
    }
  };

  const handleFile = (uploadedFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
      setFile(uploadedFile);
      setErrorMessage(null);
      setSuccessMessage(null);
    };
    reader.readAsDataURL(uploadedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setErrorMessage('No file selected');
      return;
    }

    // Перевірка формату файлу (приклад для зображень)
    const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedFormats.includes(file.type)) {
      setErrorMessage('No Cat found - try a different one');
      return;
    }

    // Додайте ваш код для відправки файлу на API тут

    // Імітація успішного завантаження
    setTimeout(() => {
      setSuccessMessage('File uploaded successfully!');
      setUploadedImage(null);
      setFile(null);
    }, 2000);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setUploadedImage(null);
    setFile(null);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <>
      {!uploadedImage && !errorMessage && (
        <Container
          style={{ backgroundImage: `url(${UploadImage})` }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <UploadInput type="file" id="fileInput" onChange={handleFileChange} />
          <UploadLabel htmlFor="fileInput">Drag & drop file here or click to browse</UploadLabel>
        </Container>
      )}
      {!uploadedImage && !errorMessage && <UploadMessage>No file selected</UploadMessage>}
      {!uploadedImage ? null : (
        <>
          <Container style={{ backgroundColor: errorMessage ? 'red' : 'transparent' }}>
            <UploadedImage src={uploadedImage} alt="Uploaded" />
          </Container>
          <UploadMessage>
            <p>{file.name}</p>
            {errorMessage && <p>{errorMessage}</p>}
            {!errorMessage && <TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.uploadphoto} onClick={handleUpload}>Upload photo</TextButton>}
            {errorMessage && <TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.uploadphoto} onClick={handleReset}>Choose another file</TextButton>}
          </UploadMessage>
        </>
      )}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </>
  );
};

export default Upload;
