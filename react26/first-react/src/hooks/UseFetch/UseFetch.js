import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true);
                setError("");
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Unable to fetch user")
                }
                const rslt = await response.json();
                setData(rslt);

            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false);
            }
        };
        fetchApi()
    }, [url])
    return { data, loading, error }
}
export default useFetch;