import axios from "axios"
import { flags } from '../flags'

/**
 * Service to handle all the API related with games
 */
const gameService = {
    /**
     * Request to get a game in HTML
     */
    async getGame() {
        return axios(`${flags().api}/empleado/game`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    // Request made and service responded
                    return error.response
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request)
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.log("error", error.message)
                }
            })
    },

}

export default gameService;