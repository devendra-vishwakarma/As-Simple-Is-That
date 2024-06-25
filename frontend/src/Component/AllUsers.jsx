import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./allUser.css"
function AllUsers() {
    const [allUser, setAllUser] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const getAllUser = async () => {
        const result = await axios.get("http://localhost:8000/allUser");
        setAllUser(result.data);
    }

    useEffect(() => {
        getAllUser();
    }, [])

    const handleNavigate = () => {
        navigate("/addUser")
    }
    const handleDelete = async (id) => {
        if (window.confirm("are you sure to delete data")) {
            const result = await axios.delete(`http://localhost:8000/${id}`)
            if (result.data.msg) {
                alert("deleted succesfully")
                getAllUser();
            } else {
                alert("Unable to delete")
            }
        }
    }

    console.log(allUser);


    const handleEdit = (id) => {
        navigate(`/editUser?id=${id}`)
    }
    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    const filteredUsers = allUser.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
        <>
            <div>
                <button onClick={handleNavigate}>ADD-User</button>

            </div>
            <div className='mt-5'>
                <label htmlFor="">Search</label>
                <input type="search" onChange={(e) => { handleSearch(e.target.value) }} />
            </div>
            <div className='container mt-5 d-flex align-item-center flex-column'>
                <table className="table table-bordered"  >
                    <thead>
                        <tr>
                            <th scope="col">s.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Tech</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.tech}</td>
                                <td>{user.salary}</td>
                                <td>{<img src={user.imageUrl} height={50} width={50} />}</td>
                                <td>
                                    <button onClick={() => handleEdit(user._id)} className='btn btn-outline-info p-2' style={{ marginRight: "2rem" }}>Edit</button>
                                    <button onClick={() => { handleDelete(user._id) }} className='btn btn-outline-danger p-2'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllUsers