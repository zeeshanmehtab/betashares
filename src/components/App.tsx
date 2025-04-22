import { Header } from './Header';
import { MainWrapper } from './MainWrapper';
import { SearchBar} from './SearchBar';
import { SearchWrapper } from './SearchWrapper';
import { Sidebar } from './Sidebar';
import { SearchResults } from './SearchResults';
import { useState, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { SearchContext } from '../context/SearchContext';
import { Footer } from './Footer';

export function App() {

    const [query, setQuery] = useState<string>('');
    const [filters, setFilters] = useState<{[key: string]: any }>({ 
        fund_size: {min: '', max: ''},
        management_fee: {min: '', max: ''}, 
        one_year_return: {min: '', max: ''},
        five_year_return: {min: '', max: ''}, 
        fund_category: [],
        investment_suitability: [],
        management_approach: [],
        dividend_frequency: []
    });
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [resultsPerPage, setResultsPerPage] = useState<number>(10);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [orderBy, setOrderBy] = useState<string>('');
    const [startSearch, setStartSearch] = useState<boolean>(false);
    const [pauseSuggestions, setPauseSuggestions] = useState<boolean>(false);
    
    return (
        <>
        <Header />
        <SearchContext value={{ filters, setFilters, query, setQuery, orderBy, setOrderBy, currentPage, setCurrentPage, resultsPerPage, setResultsPerPage, totalResults, setTotalResults, startSearch, setStartSearch, pauseSuggestions, setPauseSuggestions }}>
        <MainWrapper>
            <SearchBar/>
            <SearchWrapper>
                <Sidebar />
                <main className="md:col-span-3 space-y-4">
                    {/* <ErrorBoundary fallback={<div className="flex flex-wrap items-center justify-between gap-4">Something went wrong</div>}> */}
                        {/* <Suspense fallback={<div className="flex flex-wrap items-center justify-between gap-4"><LoaderCircle className="animate-spin" /></div>}> */}
                            <SearchResults />
                        {/* </Suspense> */}
                    {/* </ErrorBoundary> */}
                </main>
            </SearchWrapper>
        </MainWrapper>
        </SearchContext>
        <Footer />
        </>
    );
}
