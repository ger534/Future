import { data } from './data';
import axios from 'axios';

jest.mock('axios')

describe('data', () => {
    it('fetches successfully data from an API', async () => {

        const data = {
            "data": {
                "09162": {
                    "ags": "09162",
                    name: "SK München",
                    "history": [
                        {
                            "cases": 599,
                            "date": "2020-12-19T00:00:00.000Z"
                        }]
                },
            },
            "meta": {
                "source": "Robert Koch-Institut",
                "contact": "Marlon Lueckert (m.lueckert@me.com)",
                "info": "https://github.com/marlon360/rki-covid-api",
                "lastUpdate": "2021-03-18T00:00:00.000Z",
                "lastCheckedForUpdate": "2021-03-19T07:23:23.900Z"
            }
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });

    it('fetches erroneously data from an API', async () => {
        axios.get.mockRejectedValueOnce();
    });
});