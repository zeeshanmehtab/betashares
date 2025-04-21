import { SingleResult } from "./SingleResult";
import { Pagination } from "./Pagination";
import { useState, use, useEffect } from 'react';
import slugify from 'react-slugify';
import { SearchContext } from "../context/SearchContext";
import { LoaderCircle } from "lucide-react";
import { search } from "../services/BetaShares";

export function SearchResults() {

    const {query, filters, setTotalResults, startSearch, setStartSearch, setPauseSuggestions, currentPage, resultsPerPage, orderBy} = use(SearchContext);
    const [results, setResults] = useState<{[key: string]: any}>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    
    const getResults = async () => {

        if (isLoading) return; // Prevent multiple requests
        setIsLoading(true);
        setPauseSuggestions(true); // Pause suggestions when searching

        search(query, filters, currentPage, resultsPerPage, orderBy).then((response) => {
            let results = response.data.results;
            setTotalResults(response.data.count);
            // console.log("COUNT", response.data.count);
            return results;
            //return results.filter(item => item.flagship_description_short);
        }).then((results) => {
            setResults(results);
        }).catch((error) => {
            console.error('Error fetching data:', error);
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);  
            setStartSearch(false);
            setPauseSuggestions(false);
        });
    }

    useEffect(() => {
        getResults();
        
    }, [startSearch, filters, currentPage, orderBy]);

    return (    
        <>
            <Pagination />
            {isLoading && <div className="flex flex-wrap items-center justify-between gap-4"><LoaderCircle className="animate-spin" /></div>}
            {error && <div className="flex flex-wrap items-center justify-between gap-4 text-red-500">{error}</div>}
            {!isLoading && results.length === 0 && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">No results found</div>}
            {
                results.map((result, index) => (
                    <SingleResult key={slugify(result.flagship_description_short + ' ' + index)} result={result} />   
                ))
            }
            <Pagination />
        </>    
        
    );
}
