// importing modules
import { useState } from 'react';
import './PersonalInfo.css'

const PersonalInfo = ({ updateUserInfo }) => {
    // States
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');

    // declaring variables
    var info = {
        "fname": fname,
        "lname": lname,
        "title": title,
        "address": address,
        "phone": phone,
        "description": description,
        'email': email,
        'photo': photo,
    }

    // supporting functions
    const onSubmit = () => {
        // this could directly be called in-line of the input:submit.  Howvever, I may need this function to clear the form contentes
        // other wise the function could be call like this onClick={() => updateUserInfo(info)};
        // update the userInfo varaiable within App.js
        updateUserInfo(info);
    }

    return (
        <div className="personal-info">
            <h3>Personal Information</h3>
            <div className="form">
                <form>
                    <input type="text" required placeholder="First Name" className="form-item" value={fname} onChange={(e) => setFName(e.target.value)}/>
                    <input type="text" required placeholder="Last Name" className="form-item" value={lname} onChange={(e) => setLName(e.target.value)}/>
                    <input type="text" placeholder="Title" className="form-item" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type="file" className="form-item" placeholder="photo" onChange ={(e) => setPhoto(e.target.files[0])}/>
                    <input type="text" required placeholder="Address" className="form-item" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <input type="tel" required placeholder="Phone 123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-item" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <input type="email" required placeholder="Email" className="form-item" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Description" className="form-item" value={description} onChange={(e) => setDescription(e.target.value)}/>                    
                </form>
                <button className="btn" onClick={onSubmit}>Add</button>
            </div>
        </div>
    )
}

export default PersonalInfo
