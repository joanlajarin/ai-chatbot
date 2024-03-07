import { useEffect, useState } from "react"

export function useFetch(url) {

    const [data, setData] = useState()
    const [loading, setLoading]  = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .finally(() => setLoading(false))
            // .catch(error) {
            //     console.og
            // }
    },[])

    return { data, loading}
}