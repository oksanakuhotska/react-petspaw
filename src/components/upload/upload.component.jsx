import { useState } from 'react';

import UploadImage from '../../assets/images/upload-bg-no-image.png';
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from '../buttons/textButton/textButton.component';
import { Container, UploadedImage, UploadInput, UploadLabel, UploadMessage } from "./upload.styles";

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

  const handleUpload = async () => {
    if (!file) {
      setErrorMessage('No file selected');
      return;
    }

    // Встановлення параметрів для відправки на сервер
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sub_id', 'my-user-1'); // Додатковий параметр 'sub_id'

    // Відправка файлу на сервер за допомогою Fetch API
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'x-api-key': 'live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A' // Заголовок 'x-api-key'
        }
      });

      // Перевірка відповіді сервера
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Обробка успішної відповіді
      const data = await response.json();
      setSuccessMessage('File uploaded successfully!');
      console.log(data); // Вивід додаткової інформації про завантажений файл
    } catch (error) {
      console.error('Error uploading file: ', error);
      setErrorMessage('Error uploading file');
    }
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
