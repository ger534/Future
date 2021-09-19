import axios from 'axios';
import Swal from 'sweetalert2'
import { flags } from '../../src/flags'

// API Request
export const getData = t => {
    const URL = `${flags().api}/districts/${flags().ags}/history/cases/${flags().days}`;
    return axios(URL, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        //data: payload,
    })
        .then(response => response)
        .catch(error => {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: t('dashboard.error'),
                footer: `<a href=${flags().api_doc}>Documentation</a>`
            })
        });
};