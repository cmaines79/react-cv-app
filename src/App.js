// importing components
import PersonalInfo from './components/PersonalInfo';

//importing CSS
import './App.css';

function App() {
  // handling the update of personal information
  const addPersonalInformation = (info) => {
    console.log(info)
  }

  return (
    <div className="container">
      <section className="userInput">
        <PersonalInfo onAdd={addPersonalInformation}/>
      </section>

      <section className="displayResume">
        show resume
      </section>
    </div>
  );
}

export default App;
