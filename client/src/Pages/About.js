import React from "react";
import Comments from "../Comments/Comments";
import AddFiles from "./UploadImg";
// import NewComponent from "./Comment";

const About = () => {
 


// file preset : souhaibsm
// cloud name : dh5a6dj9c
// api adress : https//api.cloudinary.com/v1_1/
// API Environment variable: CLOUDINARY_URL=cloudinary://394745118979722:SgwUelaR8UyPFdV-eSGXveB2zmw@dh5a6dj9c

// const [imageSelected, setImageSelected] = useState("")

// const uploadImage= () => {

//   const form= new FormData();
//   form.append("file", imageSelected);
//   form.append("upload_preset", "gn4qjptr");
//   Axios.post("https//api.cloudinary.com/v1_1/dh5a6dj9c/upload", form)
//   .then((response) => {
//   console.log(response);
//   })
// }

  return (
    <div>
      <br/><br/><AddFiles/>
     {/* <input 
            type="file"      
            onChange={(e)=>setImageSelected(e.target.files[0])}/>
     <br/><br/>
     <button onClick={uploadImage}>Upload Image !</button>
      */}
<br/><br/>

<Comments currentUserId='1'/>

    </div>
  );
};

export default About;


