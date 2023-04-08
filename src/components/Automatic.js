import React from 'react'
import './Automatic.css'

export default class Automatic extends React.Component {

    constructor(props) {
        super(props)
        this.state = { result: "" }
    }


    render() {
        return (
            <div className='calc-container' >
                <br />
                <label>Upload File: </label>
                <br />
                <input type="file" accept=".pdf" />
                <br /><br /><br />
                <label>Processing Fees: {this.state.fees} </label>
                <br /><br />
                <label>Total Deposit: {this.state.deposit} </label>
                <br /><br />
                <label>Currently paying: {this.state.result} </label>
                <br /><br />
            </div>

        )
    }
}
