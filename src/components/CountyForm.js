import React, { useState } from 'react';

const StateForm = () => {

    const [usCounty, setUsCounty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCounty = e.target.value;
        console.log(e.target[0].value)
        setUsCounty({
            county: newCounty
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="county">County</label>
                <input name="county" type="text" />
                <button type="submit" className="btn btn-secondary float-left">Submit</button>
            </form>
        </div>
    )
}

export default StateForm;