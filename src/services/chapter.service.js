import axios from "axios"
import { flags } from '../flags'

/**
 * Service to handle all the API related with chapters
 */
const chapterService = {
    /**
     * Request to get a chapter in HTML
     */
    async getChapter(chapter) {
        return axios(`${flags().api}/future/chapter`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: {
                chapter: chapter
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
    /**
     * Request to get the pdf of a chapter
     */
    async downloadChapter(file_name) {
        return axios(`${flags().api}/future/download`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: {
                chapter: file_name
            },
            responseType: 'arraybuffer',
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
    }

}

export default chapterService;