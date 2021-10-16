import './ResumeAside.css';

const ResumeAside = ( { userInfo }) => {
    return (
        <div className="aside">
            <img src={userInfo.photo} alt="Head Shot" id="head-shot"/>
            <div className="heading">
                <label>Personal Details</label>
            </div>
            <div>
                <label>Address</label>
                <h5>{userInfo.address}</h5>
            </div>
            <div>
                <label>Phone Nubmer</label>
                <h5>{userInfo.phone}</h5>
            </div>
            <div>
                <label>Email</label>
                <h5>{userInfo.email}</h5>
            </div>
        </div>
    )
}

export default ResumeAside
