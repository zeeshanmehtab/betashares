import axios from "axios";

const BASE_URL = import.meta.env.VITE_SEARCH_API_URL;

const api = axios.create({
    baseURL: BASE_URL, 

    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': true,
    },
});

export const search = (query, filters, currentPage, resultsPerPage) => {
    
    let params = {
        "from": ((currentPage - 1) * resultsPerPage) + 1,
        "size": resultsPerPage,
        "kind": ["etf"],
    };

    if (query) {
        params["search_text"] = query;
    }

    params = {...params, ...filters};
    console.log("PARAMS", params);
    return api.post("search", JSON.stringify(params));
}
