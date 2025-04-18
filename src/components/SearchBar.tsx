import { Dispatch, SetStateAction } from "react";

export function SearchBar({query, setQuery}: {
    query: string, 
    setQuery: Dispatch<SetStateAction<string>>
}) {
    return (
        <div className="max-w-6xl mx-auto mb-6 relative">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search funds..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />
        </div>
    );
}
