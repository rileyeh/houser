import { createStore } from 'redux' 


const initialState = {
    houses: [],
    name: '',
    address: '',
    city: '',
    state: '', 
    zip: 0
}

export const ADD_HOUSE = 'ADD_HOUSE'
export const DELETE_HOUSE = 'DELETE_HOUSE'

function reducer(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case ADD_HOUSE: 
            return {
                ...state, 
                payload
            }

        case DELETE_HOUSE:            
        state.houses.splice(payload, 1)
        return {
            ...state
        }


        default: 
            return {...state}
    }
}

export default createStore(reducer)