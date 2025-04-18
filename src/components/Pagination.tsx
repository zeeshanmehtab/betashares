export function Pagination(props) {
    return (
        <div className="flex justify-between items-center pt-4 border-t">
            <button className="px-4 py-2 text-sm bg-gray-200 text-dark rounded hover:bg-gray-300">Previous</button>
            <div className="text-sm text-muted">Page 1 of 5</div>
            <button className="px-4 py-2 text-sm bg-gray-200 text-dark rounded hover:bg-gray-300">Next</button>
        </div>
    );
}
