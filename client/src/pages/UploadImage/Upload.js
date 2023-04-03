import React, {useState} from 'react'

import './Upload.scss'

import SideBar from '../../components/SideBar/SideBar'

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState('');

    const handleFileSelect = event => {
        setSelectedFile(event.target.files[0]);
      };

    const handleSubmit = async event => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('file', selectedFile);
      
        try {
          const response = await fetch('http://localhost:8000/api/upload', {
            method: 'POST',
            body: formData
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      
  return (
    <div className='Upload'>
        <SideBar/>
        <div className='container'>
            <div className='header'>
                Add an image to the database
            </div>
        <form onSubmit={handleSubmit} className="form">
      <input type="file" onChange={handleFileSelect} className="button" />
      <button type="submit">Upload</button>
    </form>
        </div>
    </div>
  )
}


export default Upload;