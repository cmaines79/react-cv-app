// importing modules
import './ResumeHeader.css';

const ResumeHeader = ({userInfo}) => {

    return (
        <div className="resume-header">
                <h1>{userInfo.fname} {userInfo.lname}</h1>
                <h3>{userInfo.title}</h3>
        </div>
    )
}

export default ResumeHeader
