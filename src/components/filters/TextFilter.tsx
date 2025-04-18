import { Dispatch, SetStateAction } from "react";

export function TextFilter({filters, setFilters, filterLabel, filterName, placeholder}: {
    filters: { [key: string]: string }, 
    setFilters: Dispatch<SetStateAction<{ [key: string]: string }>>,
    filterLabel: string,
    filterName: string,
    placeholder: string
}) {

    return (
        <div>
            <label className="block font-medium mb-2">{filterLabel}</label>
            <input
                type="text"
                value={filters[`${filterName}`]}
                onChange={(e) => setFilters({ ...filters, [`${filterName}`]: e.target.value })} 
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
}