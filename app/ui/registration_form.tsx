"use client"
import React, { useState } from 'react';

export default function RegistrationForm() {
    const [formStatus, setFormStatus] = useState();
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('loading');
        console.log(formData);
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then(() => {
            setFormStatus('success');
        }).catch(() => {
            setFormStatus('error');
        });
        
    }

    return (
    <form className="rounded-md" onSubmit={handleSubmit} style={{backgroundColor: '#d3e3f0', padding: '20px'}}>
        <div className="mb-2">
            <label style={{fontSize: '18px', display: 'block'}}>Tên của bạn là gì:</label>
            <input className="rounded-md" type="text" name="name" onChange={handleInputChange} style={{fontSize: '18px', width: '100%'}} />
        </div>
        <div className="mb-2">
            <label style={{fontSize: '18px', display: 'block'}}>Email của bạn:</label>
            <input className="rounded-md" type="email" name="email" onChange={handleInputChange} style={{fontSize: '18px', width: '100%'}} />
        </div>
        <div className="mb-2">
            <label style={{fontSize: '18px', display: 'block'}}>Mật khẩu:</label>
            <input className="rounded-md" type="password" name="password" onChange={handleInputChange} style={{fontSize: '18px', width: '100%'}} />
        </div>
        <div className="mb-2">
            <label style={{fontSize: '18px', display: 'block'}}>Lớp bạn muốn đăng kí:</label>
            <input className="rounded-md" type="text" name="class" onChange={handleInputChange} style={{fontSize: '18px', width: '100%'}} />
        </div>
        <div className="mb-2">
            <label style={{fontSize: '18px', display: 'block'}}>Bạn muốn nhắn gửi gì đến chúng mình không:</label>
            <textarea className="rounded-md" name="message" onChange={handleInputChange} onFocus={(e) => e.target.setSelectionRange(0, 0)} style={{fontSize: '18px', width: '100%', height: '100px'}} />
        </div>
        <button type="submit" style={{backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '18px'}}>Submit</button>
        {formStatus === 'loading' && <p>Loading...</p>}
        {formStatus === 'success' && <p>Success!</p>}
        {formStatus === 'error' && <p>Error!</p>}
    </form>
);
}