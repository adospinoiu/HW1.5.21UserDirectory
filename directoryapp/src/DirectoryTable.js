// import { BasicTable } from "./Components/BasicTable";
import EmployeeData from "./Components/EmployeeData";
import SearchBar from "./Components/SearchBar";


function DirectoryTable() {
    return (
        <div className="DirectoryTable">
            <h1>Search the Employee Directory</h1>

            <SearchBar />

            <EmployeeData />

            {/* <BasicTable /> */}
        </div>
    );
}

export default DirectoryTable;