import { use } from "react";
import { SearchContext } from "../context/SearchContext";

export function Pagination() {

    const {currentPage, totalResults, setCurrentPage, setOrderBy} = use(SearchContext);

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex justify-between items-center pt-4">
                {currentPage === 1 ? (
                <button className="px-4 py-2 text-sm bg-gray-200 text-light rounded mr-2 ml-2">Previous</button>
                ) : (
                <button className="px-4 py-2 text-sm bg-gray-200 text-dark rounded hover:bg-gray-300 mr-2 ml-2"
                    disabled={currentPage === 1}
                    onClick={(e) => setCurrentPage(currentPage - 1) }
                >Previous</button>
                )}
                <div className="text-sm text-muted">Page {currentPage} of {Math.ceil(totalResults/10)}</div>
                {(currentPage == (Math.ceil(totalResults/10)) || totalResults == 0) ? (
                    <button className="px-4 py-2 text-sm bg-gray-200 text-light rounded mr-2 ml-2" >Next</button>
                ) : (
                    <button className="px-4 py-2 text-sm bg-gray-200 text-dark rounded hover:bg-gray-300 mr-2 ml-2" 
                        disabled={currentPage == (Math.ceil(totalResults/10))}
                        onClick={(e) => setCurrentPage(currentPage + 1) }
                    >Next</button>
                )}
                
            </div>
            <div className="flexitems-center">
                <select 
                    className="border p-2 rounded-2xl shadow-sm"
                    onChange={(e) => setOrderBy(e.target.value)}
                >
                    <option value="">Sort by</option>
                    <option value="one_year_return.asc">One Year Return - Asc</option>
                    <option value="one_year_return.desc">One Year Return - Desc</option>
                    <option value="five_year_return.asc">Five Year Return - Asc</option>
                    <option value="five_year_return.desc">Five Year Return - Desc</option>
                </select>
            </div>
        </div>
    );
}
