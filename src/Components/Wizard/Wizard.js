import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Wizard.css'

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '', 
            zip: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let { name, value } = e.target
        this.setState({
            [name] : value
        })
    }

    addHouse = () => {
        let { name, address, city, state, zip } = this.state
        axios.post('/addhouse', { name, address, city, state, zip }).then(res => {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '', 
                zip: 0
            })
        }).catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <h1>Wizard</h1>
                <Link to='/'><button>Cancel</button></Link>

                <div className='inputs'>
                    <input type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleChange} />
                    <input type='text' name='address' placeholder='address' value={this.state.address} onChange={this.handleChange} />
                    <input type='text' name='city' placeholder='city' value={this.state.city} onChange={this.handleChange} />
                    <input type='text' name='state' placeholder='state' maxLength='2' value={this.state.state} onChange={this.handleChange} />
                    <input type='text' name='zip' placeholder='zip' maxLength='5' value={this.state.zip} onChange={this.handleChange} />
                </div>

                {this.state.zip !== 0 //assuming people will fill these out in order
                ?
                    <Link to='/'><button onClick={this.addHouse}>Complete</button></Link>
                :
                    <div></div>
                }

                
            </div>
        )
    }
}