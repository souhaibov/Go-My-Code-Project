import React, { useState } from "react";
import axios from "axios";

const About = () => {

// file preset : souhaibsm
// cloud name : dh5a6dj9c
// api adress : https//api.cloudinary.com/v1_1/

const [file, setFile] = useState(null)

const uploadImage= async() => {

  const form= new FormData();
  form.append("file", file);
  form.append("upload_preset", "souhaibsm");
  await axios.post("https//api.cloudinary.com/v1_1/dh5a6dj9c/upload", form)

}

  return (
    <div>
      <br/><br/>
     <input type="file" 
            value={file}
            onChange={(e)=>setFile(e.target.files[0])}/>
     <br/><br/>
     <button onClick={uploadImage}>Upload Image !</button>
    </div>
  );
};

export default About;
