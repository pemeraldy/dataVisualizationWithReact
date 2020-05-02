import axios from 'axios'

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get('https://covid19.mathdro.id/api')
        // const extractedData = {
        //     confirmed,
        //     recovered,
        //     deaths,
        //     lastUpdate
        // }
        return { confirmed, recovered, deaths, lastUpdate }

    } catch (err) {
        console.log(err)
    }

}