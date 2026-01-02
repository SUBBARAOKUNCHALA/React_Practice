import React from "react";
import { useState, useEffect } from "react";
export const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function HitApi() {
            try {
                const res = await fetch(url);
                const Response = await res.json();
                setData(Response)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        HitApi()
    }, [url])
    return { data, loading, error };
}