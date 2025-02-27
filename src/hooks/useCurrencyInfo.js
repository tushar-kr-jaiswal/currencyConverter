import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data[currency]);
                setLoading(false);
            });
    }, [currency]);

    return loading ? {} : data; // Prevent errors when `data` is null
}
export default useCurrencyInfo;
