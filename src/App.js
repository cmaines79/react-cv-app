// importing components
import PersonalInfo from './components/personalInfo/PersonalInfo';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import FormFooter from './components/FormFooter/FromFooter';
import Header from './components/header/Header';
import ResumeHeader from './components/resume/ResumeHeader';
import ResumeMain from './components/resume/ResumeMain';
import ResumeAside from './components/resume/ResumeAside';


// importing hooks
import { useState } from 'react';

//importing others
import './App.css';
import headShot from './headshot.jpg';


function App() {
  // App variables
  const [userInfo, setUserInfo] = useState({});
  const [userExperience, setUserExperience] = useState([]);
  const [userEducation, setUserEducation] = useState([]);
  console.log(userInfo);
  
 // supporting functions
 const updateUserExperience = (newExperience) => {
   setUserExperience([newExperience, ...userExperience]);
 }

 const updateUserEducation = (newEducation => {
   setUserEducation([newEducation, ...userEducation]);
 })

 const loadSampleData = () => {
    var sampleInfo = {
      "fname": 'Jane',
      "lname": 'Doe',
      "title": 'Director of Sales',
      "address": '123 Main Street, Bozeman, MT 59714',
      "phone": '406-555-1212',
      "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a condimentum neque. Vestibulum tristique ligula sed urna luctus posuere. Maecenas lacinia magna ex, vel ultricies justo fringilla quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend sagittis pellentesque. Mauris sagittis eros non vestibulum tempor. Nulla facilisis vitae libero in sodales.',
      'email': 'jon.doe@gmail.com',
      'photo': headShot,
    }
    setUserInfo(sampleInfo);
  
    var sampleExperience = [
      {
        "position": "Director of Sales",
        "company": "The Laser Company",
        "city": "Bozeman",
        "state": "MT",
        "from": "09/2018",
        "to": "Present",
      },
      {
      "position": "Business Manager",
        "company": "The Medical Company",
        "city": "Bozeman",
        "state": "MT",
        "from": "05/2015",
        "to": "09/2018",
      }
    ]
    setUserExperience(sampleExperience);

    var sampleEducation = [
      {
        "university": "Montana State University",
        "degree": "Bachelors",
        "subject": "Computer Science",
        "city": "Bozeman",
        "state": "MT",
        "from": "08/2008",
        "to": "05/2012",
      },
      {
      "university": "Southern Oregon University",
      "degree": "Associates",
      "subject": "Business Management",
      "city": "Salem",
      "state": "OR",
      "from": "08/2006",
      "to": "05/2008",
      }
    ]
    setUserEducation(sampleEducation);
 }

  return (
    <div className="container">
      <Header />
      <div className="main">
        <section className="user-input">
          <PersonalInfo updateUserInfo={info => setUserInfo(info)} />
          <Experience updateUserExperience={(newExperience) => updateUserExperience(newExperience)} />
          <Education updateUserEducation={(newEducation) => updateUserEducation}/>
          <FormFooter sampleData={loadSampleData}/>
        </section>
        <section className="displayResume">
          <ResumeHeader userInfo={userInfo} />
          <div className="resume-body">
            <ResumeMain userInfo={userInfo} userExperience={userExperience} userEducation={userEducation}/>
            <ResumeAside userInfo={userInfo}/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
