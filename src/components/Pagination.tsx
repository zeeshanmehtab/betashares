import { use } from "react";
import { SearchContext } from "../context/SearchContext";

export function Pagination() {

    const {currentPage, totalResults, setCurrentPage} = use(SearchContext);

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
            <div className="flex gap-2 items-center">
                <select className="border p-2 rounded-2xl shadow-sm">
                <option>Sort by</option>
                <option>Name</option>
                <option>Location</option>
                <option>Popularity</option>
                </select>
            </div>
        </div>
    );
}
