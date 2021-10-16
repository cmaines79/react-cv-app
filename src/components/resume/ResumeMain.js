import './ResumeMain.css';

const ResumeMain = ({userInfo, userExperience, userEducation}) => {
    return (
        <div className="resume-main">
            <div className="heading" id="first-heading">
                <label>Description</label>
            </div>
            <div>
                {userInfo.description}
            </div>
            <div className="heading">
                <label>Work Experience</label>
            </div>
            <div className="summary">
                {userExperience.map((experience) => (
                    <article key={experience.position} className="details">
                        <div className="dates">{experience.from} - {experience.to}</div>
                        <div className="specifics">
                            <p>{experience.company} - {experience.city}, {experience.state}</p>
                            <p>{experience.position}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="heading">
                <label>Education</label>
            </div>
            <div className="summary">
                {userEducation.map((education) => (
                    <article key={education.degree} className="details">
                        <div className="dates">{education.from} - {education.to}</div>
                        <div className="specifics">
                        <p>{education.university} - {education.city}, {education.state}</p>
                        <p>Degree: {education.degree}</p>
                        <p>Subject: {education.subject}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default ResumeMain
