import { FundSizeFilter } from "./filters/FundSizeFilter";
import { MinMaxFilter } from "./filters/MinMaxFilter";
import { TextFilter } from "./filters/TextFilter";

export function Sidebar({filters, setFilters}: {
    filters: { [key: string]: string }, 
    setFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}) {
    return (
        <aside className="bg-white p-4 rounded-lg shadow space-y-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="Fund Size ($)" filterName="fund_size" minplaceholder="0" maxplaceholder="10000" />
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="Management Fee ($)" filterName="management_fee" minplaceholder="0" maxplaceholder="10000" />
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="One Year Return ($)" filterName="one_year_return" minplaceholder="0" maxplaceholder="10000" />
        <MinMaxFilter filters={filters} setFilters={setFilters} filterLabel="Five Year Return ($)" filterName="five_year_return" minplaceholder="0" maxplaceholder="10000" />
        <TextFilter filters={filters} setFilters={setFilters} filterLabel="Fund Category" filterName="fund_category" placeholder="Eg. Super funds" />


        {/* Apply Filters Button */}
        <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-blue-800 transition">
          Apply Filters
        </button>
      </aside>
    );
}
