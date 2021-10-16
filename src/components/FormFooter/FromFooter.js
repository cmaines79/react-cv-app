import './FormFooter.css';

const FromFooter = ({ sampleData }) => {
    return (
        <div className="form-footer">
            <button className="btn btn-green">Generate PDF</button>
            <button className="btn btn-orange" onClick={sampleData}>Load Example</button>
            <button className="btn btn-red">Reset</button>
        </div>
    )
}

export default FromFooter
