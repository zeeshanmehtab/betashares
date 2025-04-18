export function Sidebar() {
    return (
        <aside className="bg-white p-4 rounded-lg shadow space-y-6">
        <h2 className="text-xl font-semibold">Filters</h2>

        {/* Fund Size */}
        <div>
          <label className="block font-medium mb-2">Fund Size ($)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Fund Category */}
        <div>
          <label className="block font-medium mb-2">Fund Category</label>
          <input
            type="text"
            placeholder="e.g. Technology"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Apply Filters Button */}
        <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-blue-800 transition">
          Apply Filters
        </button>
      </aside>
    );
}
