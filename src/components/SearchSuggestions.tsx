import { SearchContext } from "../context/SearchContext";
import { suggest } from "../services/OpenAI";
import { use, useState, useEffect } from "react";
import slugify from "react-slugify";

export function SearchSuggestions(props) {
    
    const {query, setQuery, setStartSearch, pauseSuggestions, setPauseSuggestions} = use(SearchContext);
    const [suggestions, setSuggestions] = useState<[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    
    const getSuggestions = async () => {
    
        if (isLoading) return; // Prevent multiple requests
        setIsLoading(true);
        console.log("SET ON SUGGESTIONS");
        suggest(query).then((response) => {
            return response.data.output[0].content[0].text;
        }).then((data) => {
            const cleanData = data
                .split(/\d+\.\s/) // Split by number and dot
                .filter(item => item.trim() !== "") // Remove empty strings
                .map(item => item.trim()); // Trim each item
            setSuggestions(cleanData);
        }).catch((error) => {
            console.error('Error fetching data:', error);
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);  
        });
    }

    useEffect(() => {
        if (!pauseSuggestions && query.length > 0) {
            getSuggestions();
        }
    }, [query]);
    
    return (
        <>
        {suggestions.length > 0 && query &&
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow z-10">
            <ul>  
            {
            suggestions.map((suggestion, index) => (
                <li key={slugify(suggestion + ' ' + index)} 
                onClick={() => {
                    setIsLoading(false);
                    setPauseSuggestions(true);
                    setStartSearch(true);
                    setQuery(suggestion);
                    setSuggestions([]);
                }}
                className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">{suggestion}
                </li>  
            ))
            }
            </ul>
        </div>
        }
        </>
    );
}
