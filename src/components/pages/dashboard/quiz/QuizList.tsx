"use client";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/navigation";
import axios from "@/utils/axios";

const paginationModel = { page: 0, pageSize: 5 };

const QuizList = () => {
    const { push } = useRouter();
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 1 },
        { field: 'language', headerName: 'Language', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => push(`/dashboard/quiz/edit/${params.row.id}`)}
                >
                    Edit
                </Button>
            )
        }
    ];
    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/quiz/user-quizzes');
            setRows(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {!!rows.length && !loading
                ?
                <Paper sx={{ width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        sx={{ border: 0 }}
                    />
                </Paper>
                :
                <Box className="flex items-start justify-center h-screen flex-col">
                    <h1 className="text-center">Loading...</h1>
                </Box>
            }
        </>
    );
}

export default QuizList;