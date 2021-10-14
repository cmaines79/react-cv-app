import { useState } from 'react';

const PersonalInfo = ({ addPersonalInformation }) => {
    // States
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    //
    const updatePersonalInformation = (e) => {
        const target = e.target.value;
        switch(e.target.id){
            case "fname":
                setFName(target);
                break;

            default: 
                console.log('error in updating personal information function');
        }

        var info = {
            "first name": {fname},
            "last name": {lname},
            "title": {title},
            "address": {address},
            "phone": {phone},
            "description": {description},
        }
        // this is not right!  I need a break!!!
        // addPersonalInformation(info);
    }

    return (
        <div>
            <h3>Personal Information</h3>
            <div className="form">
                {/* <input type="text" placeholder="First Name" className="form-item" value={fname} onChange={(e) => setFName(e.target.value)}/> */}
                <input type="text" id="fname" placeholder="First Name" className="form-item" value={fname} onChange={(e) => updatePersonalInformation(e)}/>
                <input type="text" id="lname" placeholder="Last Name" className="form-item" value={lname} onChange={(e) => setLName(e.target.value)}/>
                <input type="text" id="title" placeholder="Title" className="form-item" value={title} onChange={(e) => setTitle(e.target.value)}/>
                {/* photo */}id=""
                <input type="text" id="address" placeholder="address" className="form-item" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input type="text" id="phone" placeholder="phone" className="form-item" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" id="description" placeholder="description" className="form-item" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
        </div>
    )
}

export default PersonalInfo
