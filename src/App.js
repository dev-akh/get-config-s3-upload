import logo from './logo.svg';
import React from "react";
import './App.css';
import {UploadS3} from './reactS3Upload'
// import {S3FileUpload} from './S3FileUpload'

export default function App() {
  
  const fileSelect=(e)=>{
    let files=e.target.files;
    console.log("File",files);
    if(files.length>0){
      var fileName="test-uploads/"+Date.now()+"_"+files[0].name;
      UploadS3(files[0],fileName);
    }
  }
  return (
    <div id="app" className="App">
      <h3>Can change date in <span className="bg-light">/src/s3/Date.js</span></h3>
      <div className="alignleft">
      <input type="file" name="select-file" id="select-file" className="select-file" onChange={(e)=>fileSelect(e)}/>
      <div>
        <ol>
          <li>Click 'choose file'</li>
          <li>Select an image file</li>
          <li>(Final) see keys at console log</li>
        </ol>
        <h5>
          Please see keys at the console
        </h5>
      </div>
      </div>
    </div>
    );
  }
  