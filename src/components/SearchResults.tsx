import { SingleResult } from "./SingleResult";
import slugify from 'react-slugify';

export function SearchResults(props) {
    return (
       <main className="md:col-span-3 space-y-4">
        {
            props.results.map((result, index) => (
                <SingleResult key={slugify(result.flagship_description_short + ' ' + index)} result={result} />   
            ))
        }
        {props.children}
        </main>
    );
}
