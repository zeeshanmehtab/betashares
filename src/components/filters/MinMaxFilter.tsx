export function MinMaxFilter({filters, setFilters, filterLabel, filterName, minplaceholder, maxplaceholder}: {
    filters: { [key: string]: string }, 
    setFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
    filterLabel: string,
    filterName: string,
    minplaceholder: string,
    maxplaceholder: string
}) {

    return (
        <div>
            <label className="block font-medium mb-2">{filterLabel}</label>
            <div className="flex space-x-2">
            <input
                type="number"
                value={filters[`min_${filterName}`]}
                onChange={(e) => setFilters({ ...filters, [`min_${filterName}`]: e.target.value })} 
                placeholder={minplaceholder}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
                type="number"
                value={filters[`max_${filterName}`]}
                onChange={(e) => setFilters({ ...filters, [`max_${filterName}`]: e.target.value })} 
                placeholder={maxplaceholder}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            </div>
        </div>
    );
}