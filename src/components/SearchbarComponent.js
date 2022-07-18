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
                <div className="form-group">
                    <label>Search</label>
                    <input className="search-input" onChange={(_e) => setSearchString(_e.target.value)} value={searchString} type='text' placeholder="Search photo" />
                    {searchString.length > 0 && (
                        <button type="button" className="clear-btn" onClick={() => { onSearchSubmit(''); setSearchString('') }}> x </button>
                    )}
                </div>
            </form>
        </section >
    );
}

export default SearchbarComponent;