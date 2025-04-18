import { Header } from './Header';
import { MainWrapper } from './MainWrapper';
import { SearchBar} from './SearchBar';
import { SearchWrapper } from './SearchWrapper';
import { Sidebar } from './Sidebar';
import { SearchResults } from './SearchResults';
import { SingleResult } from './SingleResult';
import { Pagination } from './Pagination';
import { SearchSuggestions } from './SearchSuggestions';

export function App() {
		return (
			<>
			<Header />
			<MainWrapper> 
				<SearchBar>
                    <SearchSuggestions />
                </SearchBar>
				<SearchWrapper>
					<Sidebar />
					<SearchResults>
						<SingleResult />
						<SingleResult />
						<SingleResult />
						<Pagination />
					</SearchResults>
				</SearchWrapper>
			</MainWrapper>
			</>
		);
}
