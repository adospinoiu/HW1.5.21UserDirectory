import axios from 'axios';
import React from 'react';
import { BasicTable } from "./BasicTable";




class EmployeeData extends React.Component {
    state = {
        employees: [{}]
    }

    // This reaches out to the API and returns an object of 100 employees which is then placed in the employees array
    componentDidMount() {
        var self = this;
        axios.get('https://randomuser.me/api/?inc=name,cell,email,id&results=10&nat=US')
            .then(function (res) {


                const employees = res.data
                self.setState({ employees: employees.results });
                console.log("Data from API call")
                console.log(employees);
                // console.log("First Employee On List");
                // console.log(employees.results[0].name.first);

            });


    }



    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.employees.map(employee => {
                            console.log("render function in employeedata component");
                            console.log(employee);
                            return (
                                // <li>{employee.name.first} {employee.name.last} {employee.cell} {employee.email}</li>
                                <li> {employee.gender} || {employee.email} || {employee.cell} || </li>
                            )
                        })
                    }
                </ul>

            <BasicTable employees={this.state.employees}/>

            </div>
        );
    }
}

export default EmployeeData;