import axios from "axios";

const BASE_URL = import.meta.env.VITE_SEARCH_API_URL;

const api = axios.create({
    baseURL: BASE_URL, 

    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': true,
    },
});

export const search = (query, filters, currentPage, resultsPerPage, orderBy) => {
    
    let params = {
        "from": ((currentPage - 1) * resultsPerPage) + 1,
        "size": resultsPerPage,
        "kind": ["etf"],
    };

    if (query) {
        params["search_text"] = query;
    }

    if (orderBy) {
        params["order_by"] = orderBy;
    }

    params = {...params, ...filters};
    const cleanParams = cleanData(params);
    return api.post("search", JSON.stringify(cleanParams));
}

function cleanData(data) {
    
    const cleaned = {};
    for (const key in data) {
        const value = data[key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Check for nested min/max
            const { min, max } = value;
            const isMinMax = 'min' in value && 'max' in value;

            if (isMinMax) {
                const isEmpty = [min, max].every(v => v === '' || v === null || v === undefined);
                if (!isEmpty) {
                    cleaned[key] = value;
                }
            } else {
                cleaned[key] = value; // keep nested object without min/max
            }

        } else if (value !== '' && value !== null && value !== undefined) {
            cleaned[key] = value;
        }
    }
    return cleaned;
}
