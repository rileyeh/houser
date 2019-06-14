import React, { Component } from 'react'
import axios from 'axios'

export default class House extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zip}</p>
                <button onClick={this.props.deleteHouse}>delete</button>
            </div>
        )
    }
}