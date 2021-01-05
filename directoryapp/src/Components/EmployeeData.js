import axios from 'axios';
import React from 'react';




class EmployeeData extends React.Component {
    state = {
        employees: []
    }

    // This reaches out to the API and returns an object of 100 employees which is then placed in the employees array
    componentDidMount() {
        var self = this;
        axios.get('https://randomuser.me/api/?results=100&nat=US')
            .then(function (res) {
                const employees = res.data
                self.setState({ employees });
                console.log(employees);
                console.log("Employee List");
                console.log(employees.results[0].name);
            
            });
        
            
    }



    render() {
        return (
            <div>
                <ul>
                    {/* <li>{employees}</li> */}
                </ul>
            </div>
        );
    }
}

export default EmployeeData;