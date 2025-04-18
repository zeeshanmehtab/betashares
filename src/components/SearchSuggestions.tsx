export function SearchSuggestions(props) {
    return (
        <div style={{'display': 'none'}} className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow z-10">
            <ul>
                <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">Technology Growth Fund</li>
                <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">Healthcare Equity Fund</li>
                <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">Real Estate Investment Trust</li>
                <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">Global Index Tracker</li>
                <li className="px-4 py-2 text-muted italic">No results found</li>
            </ul>
        </div>
    );
}
