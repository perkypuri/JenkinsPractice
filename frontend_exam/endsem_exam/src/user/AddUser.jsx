import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    contact: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCase = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.toUpperCase() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/adduser`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({ name: '', email: '', gender: '', contact: '' });
      }
    } catch (err) {
      console.error("Full error:", err.response?.data || err);
      setMessage('');
      if (err.response && typeof err.response.data === 'object') {
        setError(err.response.data);
      } else {
        setError(err.response?.data || "An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add User</h3>
      {message ? (
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{typeof error === "string" ? error : error.message || "Something went wrong!"}</p>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} onKeyUp={handleCase} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Mobile No</label>
          <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
