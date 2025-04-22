export function SingleResult({result}) {
    return (
        <div key={result.flagship_description_short} className="bg-white rounded-2xl shadow-md overflow-hidden flex">
            <img src={result.flagship_image_url} alt="Image" className="w-32 h-32 object-cover rounded-l-2xl" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{result.flagship_description_short}</h2>
                <p className="text-gray-600 mt-2">{result.flagship_description_long}</p>
                <ul className="mt-4 text-sm text-gray-700">
                    <li><strong>Issuer:</strong> {result.issuer}</li>
                    <li><strong>Fund Size:</strong> {result.fund_size}</li>
                    <li><strong>Management Fee:</strong> {result.management_fee}%</li>
                    <li><strong>Classification:</strong> {result.classification}</li>
                    <li><strong>Inception Date:</strong> {result.inception_date}</li>
                    <li><strong>Dividend Frequency:</strong> {result.dividend_frequency}</li>
                    <li><strong>Investment Suitability:</strong> {result.investment_suitability}</li>
                </ul>
            </div>
        </div>   
    );
}
