"use client";
import { DataGrid, GridColDef,DEFAULT_GRID_AUTOSIZE_OPTIONS } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', },
    { field: 'firstName', headerName: 'First name', },
    { field: 'lastName', headerName: 'Last name' },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',

    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,

        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const QuizList = () => {
    return (
        <>
            <Paper sx={{ width: '100%' }}>
                <DataGrid
                 autosizeOptions={{
                    columns: ['id', 'firstName', 'lastName', 'age', 'fullName'],
                    includeOutliers: true,
                    includeHeaders: true,
                    expand: true
                  }}
                
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
}

export default QuizList;