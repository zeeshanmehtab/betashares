import { createContext } from "react";

export const SearchContext = createContext<{
    filters: { [key: string]: string };
    setFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    resultsPerPage: number;
    setResultsPerPage: React.Dispatch<React.SetStateAction<number>>;
    totalResults: number;
    setTotalResults: React.Dispatch<React.SetStateAction<number>>;
    startSearch: boolean;
    setStartSearch: React.Dispatch<React.SetStateAction<boolean>>;
    pauseSuggestions: boolean;
    setPauseSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
}>(null);
