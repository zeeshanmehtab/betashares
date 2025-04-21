export function SingleResult({result}) {
    return (
        <div key={result.flagship_description_short} className="bg-white rounded-2xl shadow-md overflow-hidden flex">
            <img src={result.flagship_image_url} alt="Image" className="w-32 h-32 object-cover rounded-l-2xl" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{result.flagship_description_short}</h2>
                <p className="text-gray-600 mt-2">{result.flagship_description_long}</p>
            </div>
        </div>   
    );
}
