import React, { Component } from 'react'
import axios from 'axios'
import store, { DELETE_HOUSE } from '../../ducks/reducer'
import './House.css'

export default class House extends Component {
    constructor(props) {
        super(props)

    }


    deleteHouse = () => {
        const { index } = this.props

        axios.delete('/delete').then(res => {
            store.dispatch({ type: DELETE_HOUSE, payload: index })
        }).catch(err => console.log(err))
    }

    render() {
        return(
            <div className='house-cards'>
                <h1>{this.props.name}</h1>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zip}</p>
                <button onClick={this.deleteHouse}>delete</button>
            </div>
        )
    }
}