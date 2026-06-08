import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(url);
            const rslt = await response.json();
            setData(rslt);
            setLoading(false)
        };
        fetchApi()
    }, [url])
    return { data, loading }
}
export default useFetch;