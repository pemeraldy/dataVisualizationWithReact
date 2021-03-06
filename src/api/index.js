import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}`)
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

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        console.log(modifiedData)
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}