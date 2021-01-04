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
            });
    }

    render() {
        return (
            <div>

            </div>

        );
    }
}

export default EmployeeData;