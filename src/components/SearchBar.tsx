import { use, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { SearchSuggestions } from "./SearchSuggestions";

export function SearchBar() {
    
    const {query, setQuery, setStartSearch} = use(SearchContext);
    const [suggestions, setSuggestions] = useState<[]>([]);

    return (
        <div className="max-w-6xl mx-auto mb-6 relative">
            <div className="flex items-center space-x-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search funds..."
                className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <button className="px-4 py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition"
                onClick={() => {
                    setStartSearch(true);
                    setSuggestions([]);
                }}
                >
            Search
            </button>
            </div>
            <SearchSuggestions suggestions={suggestions} setSuggestions={setSuggestions} />
        </div>
    );
}
