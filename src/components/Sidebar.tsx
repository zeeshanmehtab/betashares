import { MinMaxFilter } from "./filters/MinMaxFilter";
import { TextFilter } from "./filters/TextFilter";
import { use } from "react";
import { SearchContext } from "../context/SearchContext";

export function Sidebar() {

    const {filters, setFilters, setStartSearch} = use(SearchContext);

    return (
        <aside className="bg-white p-4 rounded-lg shadow space-y-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="Fund Size ($)" filterName="fund_size" minplaceholder="0" maxplaceholder="10000" />
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="Management Fee ($)" filterName="management_fee" minplaceholder="0" maxplaceholder="10000" />
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="One Year Return ($)" filterName="one_year_return" minplaceholder="0" maxplaceholder="10000" />
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="Five Year Return ($)" filterName="five_year_return" minplaceholder="0" maxplaceholder="10000" />
        <TextFilter filters={filters} setFilters={setFilters} filterLabel="Fund Category" filterName="fund_category" placeholder="Eg. Australian equities" />
        <TextFilter filters={filters} setFilters={setFilters} filterLabel="Investment Suitability" filterName="investment_suitability" placeholder="Eg. Capital growth" />
        <TextFilter filters={filters} setFilters={setFilters} filterLabel="Management Approach" filterName="management_approach" placeholder="Eg. Active or passive" />
        <TextFilter filters={filters} setFilters={setFilters} filterLabel="Dividend Frequency" filterName="dividend_frequency" placeholder="Eg. Quarterly" />


        {/* Apply Filters Button */}
        <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-orange-700 transition"
          onClick={() => {
            setStartSearch(true);
          }}
        >
          Apply Filters
        </button>
      </aside>
    );
}
