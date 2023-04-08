import React from 'react'
import './Manual.css'
import { round } from 'lodash';
import CurrencyInput from 'react-currency-input-field';

export default class Manual extends React.Component {

    constructor(props) {
        super(props)
        this.state = { n1: "", n2: "", result: "" }
    }


    result() {
        this.setState({ result: round((this.state.n1 / this.state.n2) * 100, 3) + "%" })
    }

    clear() {
        this.setState({
            n1: "",
            n2: "",
            result: "",
        });
    }
    render() {
        return (
            <div className='calc-container' >
                <br />
                <label>Total Processing Fees: </label>
                <CurrencyInput prefix='$' placeholder='$0.00' value={this.state.n1} onValueChange={(value, name) => { this.setState({ n1: value, name }) }} />
                <br /><br /><br />
                <label>Total Deposit Amount: </label>
                <CurrencyInput prefix='$' placeholder='$0.00' value={this.state.n2} onValueChange={(value, name) => { this.setState({ n2: value, name }) }} />
                <br /><br /><br />
                <button className='calculate-button' onClick={() => { this.result() }} >Calculate</button>
                <button className='clear-button' onClick={() => { this.clear() }}>Clear</button>
                <br /><br /><br />
                <label>Currently paying: {this.state.result} </label>
                <br /><br />
            </div>

        )
    }
}
