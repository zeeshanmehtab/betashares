export function SearchWrapper({ children }) {
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {children}
      </div>
    );
}
