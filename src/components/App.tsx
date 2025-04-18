import { Header } from './Header';
import { MainWrapper } from './MainWrapper';
import { SearchBar} from './SearchBar';
import { SearchWrapper } from './SearchWrapper';
import { Sidebar } from './Sidebar';
import { SearchResults } from './SearchResults';
import { SingleResult } from './SingleResult';
import { Pagination } from './Pagination';
import { SearchSuggestions } from './SearchSuggestions';
import { results } from '../data/results.ts';
import { useState } from 'react';

export function App() {

    const [query, setQuery] = useState<string>('');
    const [filters, setFilters] = useState<{[key: string]: string }>({ 
        min_fund_size: '', 
        max_fund_size: '', 
        min_management_fee: '', 
        max_management_fee: '' ,
        min_one_year_return: '', 
        max_one_year_return: '' ,
        min_five_year_return: '', 
        max_five_year_return: '' ,
        fund_category: ''
    });
    
    return (
        <>
        <Header />
        <MainWrapper> 
            <SearchBar query={query} setQuery={setQuery} />
            <SearchWrapper>
                <Sidebar filters={filters} setFilters={setFilters} />
                <SearchResults results={results}>
                    <Pagination />
                </SearchResults>
            </SearchWrapper>
        </MainWrapper>
        </>
    );
}
