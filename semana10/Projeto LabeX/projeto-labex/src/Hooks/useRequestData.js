import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data.trips)
        })
    }, [url])
    return data
}