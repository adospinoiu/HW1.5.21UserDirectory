export const COLUMNS = [
    // {
    //     Header: 'ID',
    //     Footer: 'ID',
    //     accessor: 'id'
    // },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Email Address',
        Footer: 'Email Address',
        accessor: 'email'
    },
    {
        Header: 'Cell Number',
        Footer: 'Cell Number',
        accessor: 'cell'
    },
    {
        Header: 'SSN',
        Footer: 'SSN',
        accessor: 'SSN'
    },
    
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Contact Info',
        Footer: 'Contact Info',
        columns: [
            {
                Header: 'Email Address',
                Footer: 'Email Address',
                accessor: 'email'
            },
            {
                Header: 'Cell Number',
                Footer: 'Cell Number',
                accessor: 'cell'
            }
        ]
    }
]