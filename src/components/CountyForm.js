import React from 'react';

const StateForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
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