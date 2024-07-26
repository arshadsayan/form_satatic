import React, { useState } from 'react';;

function Fee() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size <= 200 * 1024) { // 200KB size limit
        setFile(selectedFile);
        setError('');
      } else {
        setFile(null);
        setError('File size exceeds 200KB limit. Please upload a smaller file.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Handle the file upload here (e.g., send it to a server)
      console.log('File uploaded:', file);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" disabled={!file}>Upload</button>
        </form>
        {file && (
          <div>
            <h2>File Details:</h2>
            <p>Name: {file.name}</p>
            <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Fee;
