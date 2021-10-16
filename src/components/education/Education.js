// importing modules
import { useState } from 'react';
import './Education.css';

const Education = ({ updateUserEducation }) => {
    // States
    const [university, setUniversity] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [degree, setDegree] = useState('');
    const [subject, setSubject] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    // variables
    const newEducation = {
        "university": university,
        "degree": degree,
        "subject": subject,
        "city": city,
        "state": state,
        "from": from,
        "to": to,
    }

    // supporting functions
    const clearFormFields = () => {
        setUniversity('');
        setDegree('');
        setSubject('');
        setCity('');
        setState('');
        setFrom('');
        setTo('');
    }

    const onDelete = () => {
        clearFormFields();
    }

    const onAdd = () => {
        updateUserEducation(newEducation);
    }

    return (
        <div className="education">
            <h3>Education</h3>
            <div className="form">
                <form action="submit">
                    <input type="text" required className="form-item" placeholder="University Name" value={university} onChange={(e) => setUniversity(e.target.value)} />
                    <input type="text" required className="form-item" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <input type="text" required className="form-item" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                    <input type="text" required className="form-item" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
                    <input type="text" required className="form-item" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <input type="text" required className="form-item" pattern="[0-9]{2}/[0-9]{4}" placeholder="From 01/2021" value={from} onChange={(e) => setFrom(e.target.value)} />
                    <input type="text" required className="form-item" pattern="[0-9]{2}/[0-9]{4}" placeholder="To 10/2021" value={to} onChange={(e) => setTo(e.target.value)} />
                    <button className="btn" onClick={onAdd}>Add</button>
                </form>
                <button className="btn" onClick={onDelete}>Clear</button>
            </div>
            
        </div>
    )
}

export default Education
