import './FormFooter.css';

const FromFooter = ({ sampleData }) => {
<<<<<<< Updated upstream
    const generatePDF = () => {
=======
    generatePDF = () => {
>>>>>>> Stashed changes
        alert('This feature is coming soon!');
    }

    return (
        <div className="form-footer">
<<<<<<< Updated upstream
            <button className="btn btn-green" onClick={generatePDF}>Generate PDF</button>
=======
            <button className="btn btn-green" onClick={generatePDF()}>Generate PDF</button>
>>>>>>> Stashed changes
            <button className="btn btn-orange" onClick={sampleData}>Load Example</button>
            <button className="btn btn-red">Reset</button>
        </div>
    )
}

export default FromFooter
