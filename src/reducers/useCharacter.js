import { useReducer } from 'react'
import Test from '../assets/Test2.png'


const initialState = {
    name: "",
    image: Test,
}


function useCharacterReducer(state, { type, name, image }) {
    switch (type) {
        case 'selected':
            console.log(state)
            console.log(name)
            return {
                ...state,
                name: name,
                image: image
            }
        default:
            console.log("a")
            return {
                ...state,
                name: name,
                image: image
            }
    }
}

export const useCharacterStore = () => useReducer(useCharacterReducer, initialState)