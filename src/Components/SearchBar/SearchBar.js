import React from "react";

function SearchBar() {
    return (
        <form>
            <input type="text" name="term" />
            <input type="text" name="location" />
            <input type="submit" />
        </form>
    );
}

export default SearchBar;