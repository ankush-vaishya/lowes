import { useState } from "react";

function SearchbarComponent({ onSearchSubmit }) {
    const [searchString, setSearchString] = useState('');
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(searchString);
    }
    return (
        <section className="searchbar-section">
            <form onSubmit={onFormSubmit}>
                <label>Search</label>
                <input className="search-input" onClick={(event) => console.log('asdfasdfasdfa---------------->', event)} onChange={(_e) => setSearchString(_e.target.value)} value={searchString} type='search' placeholder="Search photo" />
                {/* <button type="button" value='x' /> */}
            </form>
        </section>
    );
}

export default SearchbarComponent;