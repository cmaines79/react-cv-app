// importing modules
import { useState } from 'react';
import './Experience.css';

const Experience = ({ updateUserExperience }) => {
    // States
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

     // delcaring variables
     var newExperience = {
        "position": position,
        "company": company,
        "city": city,
        "state": state,
        "from": from,
        "to": to,
    }

    // supporting functions
    const clearFormFields = () => {
        setPosition('');
        setCompany('');
        setCity('');
        setState('');
        setFrom('');
        setTo('');
    }

    const onAdd = () => {
        updateUserExperience(newExperience);
    }

    const onDelete = () => {
        clearFormFields();
    }

    return (
        <div className="experience">
            <h3>Experience</h3>
            <div className="form">
                <form action="submit">
                    <input type="text" required className="form-item" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
                    <input type="text" required className="form-item" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                    <input type="text" required className="form-item" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <input type="text" required className="form-item" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                    <input type="text" required className="form-item" pattern="[0-9]{2}/[0-9]{4}" placeholder="From 01/2021" value={from} onChange={(e) => setFrom(e.target.value)} />
                    <input type="text" required className="form-item" pattern="[0-9]{2}/[0-9]{4}" placeholder="To 10/2021" value={to} onChange={(e) => setTo(e.target.value)} />
                </form>
                <button className="btn" onClick={onAdd}>Add</button>
                <button className="btn" onClick={onDelete}>Clear</button>
            </div>
        </div>
    )
}

export default Experience
