import { Dispatch, SetStateAction } from "react";

export function MinMaxFilter({filters, setFilters, filterLabel, filterName, minplaceholder, maxplaceholder}: {
    filters: { [key: string]: string }, 
    setFilters: Dispatch<SetStateAction<{ [key: string]: any }>>,
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
                min="0"
                value={filters[`${filterName}`]['min']}
                onChange={(e) => setFilters({ ...filters, [`${filterName}`]: {max: filters[`${filterName}`]['max'], min: e.target.value} })} 
                placeholder={minplaceholder}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
                type="number"
                min="0"
                value={filters[`${filterName}`]['max']}
                onChange={(e) => setFilters({ ...filters, [`${filterName}`]: {min: filters[`${filterName}`]['min'], max: e.target.value} })} 
                placeholder={maxplaceholder}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            </div>
        </div>
    );
}