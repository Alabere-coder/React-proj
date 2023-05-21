import { useState, useEffect } from "react"

const UseFetch = (url) => {
    // it was change from blogs to data
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json();
                })
                .then(data => {

                    setData(data)
                    setIsLoading(false)
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {

                    } else {
                        setError(err.message)
                        setIsLoading(false)
                    }

                })
        }, 1000)

        return () => abortCont.abort();
    }, [])  //dependency Array

    return {
        data,
        isLoading,
        error
    }
}

export default UseFetch