import { createStore } from 'redux' 


const initialState = {
    houses: []
}

export const DELETE_HOUSE = 'DELETE_HOUSE'

function reducer(state = initialState, action) {
    const { type, payload } = action

    switch(type) {

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