import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const naviagte = useNavigate();
  const [image, setImage] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    tech: "",
    salary: "",
    imageUrl: ""
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "emvcm9bk");
    data.append("cloud_name", "df7qe7tq2");


    if (formData.name !== "" && formData.tech !== "" && formData !== "" && image) {
      axios.post("https://api.cloudinary.com/v1_1/df7qe7tq2/image/upload", data).then(async (response) => {
   
        const res = await axios.post("http://localhost:8000/add", {...formData,imageUrl:response.data.secure_url});
        if (res.data) {
          alert("userCreated SuccessFully");
          naviagte("/")
        }
      })
    }
    else {
      alert("please fill the form")
    }
  }

  const handleChangeTo = (e) => {
    let file = e.target.files[0];
    setImage(file)
  }
const ele = document.getElementById("")
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">name</label>
        <input type="text" value={formData.name} onChange={handleChange} name='name'/>
        <p>{formData.name !== "" ? "":""}</p>/
      </div>
      <div>
        <label htmlFor="">tech</label>
        <input type="text" value={formData.tech} onChange={handleChange} name='tech' />
        {/* <p>{formData.name !== "" ? "" : "plese fill the tech!"}</p> */}
      </div>
      <div>
        <label htmlFor="">salary</label>
        <input type="text" value={formData.salary} onChange={handleChange} name='salary' />
        {/* <p>{formData.name !== "" ? "" : "plese fill the salary!"}</p> */}
      </div>
      <div>
        <label htmlFor="">fileUpload</label>
        <input type="file" onChange={handleChangeTo} name='file' />
        {/* <p>{formData.name !== "" ? "" : "plese fill the salary!"}</p> */}
      </div>
      <div>
        <input type="submit" value={"submit"} />
      </div>
    </form>
  )
}

export default AddUser