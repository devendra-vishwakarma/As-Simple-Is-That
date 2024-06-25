import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

function EditUser() {
    const naviagte = useNavigate();
    const [searchParam] = useSearchParams();
    const userId = searchParam.get("id");

    const [formData, setFormData] = useState({
        name: "",
        tech: "",
        salary: ""
    });

    const getUser = async () => {
        const result = await axios.get(`http://localhost:8000/${userId}`)
        const { name, tech, salary } = result.data
        setFormData({ name, tech, salary });
    }

    useEffect(() => {
        getUser();
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name !== "" && formData.tech !== "" && formData !== "") {
            const res = await axios.put(`http://localhost:8000/${userId}`, formData);
            if (res.data) {
                alert("user Updated SuccessFully");
                naviagte("/")
            }
        }
        else {
            alert("please fill the form")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">name</label>
                <input type="text" value={formData.name} onChange={handleChange} name='name' />
                {/* <p>{formData.name !== "" ? "" : "plese fill the name!"}</p>/ */}
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
                <input type="submit" value={"update"} />
            </div>
        </form>
    )
}

export default EditUser;