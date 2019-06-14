import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
    }

    // componentDidUpdate(prevProps) {
    //     console.log(22222, prevProps)
    //     axios.get('/houses').then(res => {
    //         this.setState({
    //             houses: res.data
    //         })
    //     })
    // }

    componentDidMount() {
        axios.get('/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse = id => {
        axios.delete(`/houses/${id}`).then(res => {
            console.log(5555, res)
        }).catch(err => console.log(err))
    }
    

    render() {
        let mappedHouses = this.state.houses.map((house, index) => {
            return (
                <House key={house.id}
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    deletHouse={this.deleteHouse} />
            )
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard'><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
        )
    }
}