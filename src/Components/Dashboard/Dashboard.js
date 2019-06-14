import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store from '../../ducks/reducer'
import './Dashboard.css'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        let reduxStore = store.getState()

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

        // store.subscribe(() => {
        //     const reduxStore = store.getState()
    
        //     this.setState({
        //       recipes: reduxStore.recipes
        //     })
    
        // })

    }

 

    render() {
        let mappedHouses = this.state.houses.map(house => {
            return (
                <House key={house.id}
                    index={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    deleteHouse={this.deleteHouse} />
            )
        })
        return(
            <div className='dashboard'>
                <div className='title-and-btn'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard'><button>Add New Property</button></Link>
                </div>

                <div className='houses'>
                    <p>Home Listings</p>
                    {mappedHouses}
                </div>
            </div>
        )
    }
}