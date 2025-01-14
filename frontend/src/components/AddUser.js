import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'Male',
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users',{
            name,
            email,
            gender
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-md">        
        <form onSubmit={saveUser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center text-primary text-2xl font-bold mt-5">Add User</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Masukkan Nama"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Masukkan Email"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e)=>setGender(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="btn btn-success w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
