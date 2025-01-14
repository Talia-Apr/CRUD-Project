import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

    const UserList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUsers();
      }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    }
      
    const deleteUser = async (id) =>{
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center mt-5">
            <div className="overflow-x-auto">
            <Link to={`add`} className="btn btn-sm btn-success mr-2 text-white">Add New</Link>
            <table className="table w-full table-auto">
                    <thead>
                        <tr>
                        <th className="text-center text-primary text-base">No</th>
                        <th className="text-center text-primary text-base">Name</th>
                        <th className="text-center text-primary text-base">Email</th>
                        <th className="text-center text-primary text-base">Gender</th>
                        <th className="text-center text-primary text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>                        
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{user.name}</td>
                                <td className="text-center">{user.email}</td>
                                <td className="text-center">{user.gender}</td>
                                <td className="text-center">
                                    <Link to={`edit/${user.id}`} class="btn btn-sm btn-warning mr-2 text-white">Edit</Link>
                                    <button onClick={()=>deleteUser(user.id)} class="btn btn-sm btn-error text-white">Delete</button>
                                </td>
                            </tr>
                        ))}                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
