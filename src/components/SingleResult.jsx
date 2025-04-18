export function SingleResult({result}) {
    return (
        <div key={result.flagship_description_short} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{result.flagship_description_short}</h3>
            <p className="text-sm text-muted">{result.flagship_description_long}</p>
        </div>   
    );
}
