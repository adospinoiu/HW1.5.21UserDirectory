import './SearchBar.css';

function SearchBar() {
    return (
        <div className="SearchBar">
            <form>
                <label>
                    Enter Employee Name (First Last):
                <input
                    name="employeeName"
                    type="text" />
                </label>

                <br />

                <input type="submit" value="Search" />

                <br />

                <h4>Display Entire Employee Directory</h4>
                <input type="submit" value="Display All" />
            </form>
        </div>

    );
}

export default SearchBar;