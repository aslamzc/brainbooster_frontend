"use client";
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyQuiz = () => {
    return (
        <>

            <Grid container spacing={1}>
                <Grid size={3}>
                    <TextField label="Title" variant="standard" fullWidth />
                </Grid>
                <Grid size={3}>
                    <TextField label="Description" variant="standard" fullWidth />
                </Grid>
                <Grid size={3}>
                    <Autocomplete
                        options={[]}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                label="Language"
                                variant="standard"
                            />
                        }
                    />
                </Grid>
                <Grid size={3}>
                    <Autocomplete
                        options={[]}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                label="Status"
                                variant="standard"
                            />
                        }
                    />
                </Grid>
            </Grid>
            <br />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Quesion 1
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField label="Quesion" variant="standard" fullWidth />
                        </Grid>
                        <Grid size={6}>
                            <TextField label="Answer 1" variant="standard" fullWidth />
                        </Grid>
                        <Grid size={6}>
                            <TextField label="Answer 2" variant="standard" fullWidth />
                        </Grid>
                        <Grid size={6}>
                            <TextField label="Answer 3" variant="standard" fullWidth />
                        </Grid>
                        <Grid size={6}>
                            <TextField label="Answer 4" variant="standard" fullWidth />
                        </Grid>
                        <Grid size={6}>
                            <Autocomplete
                                options={[]}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="Correct Answer"
                                        variant="standard"
                                    />
                                }
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default MyQuiz;
