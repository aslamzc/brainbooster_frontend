"use client";
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { questionObj } from './MyQuizSchema';


type QuestionType = {
    question: string,
    answer: Array<string>
    correctAnswer: number | null
}


const MyQuiz = () => {
    const [questions, setQuestions] = useState<Array<QuestionType>>([questionObj]);
    const [expanded, setExpanded] = useState<number | null>(null);
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
            <Grid container spacing={1} justifyContent="flex-end"
                alignItems="flex-end">
                <Grid size={12}>
                    {questions.map((question, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={(_, isExpanded) => setExpanded(isExpanded ? index : null)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {index !== expanded && question.question}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid size={12}>
                                        <TextField value={question.question} label="Quesion" variant="standard" fullWidth />
                                    </Grid>
                                    <Grid size={6}>
                                        <TextField value={question.answer[0]} label="Answer 1" variant="standard" fullWidth />
                                    </Grid>
                                    <Grid size={6}>
                                        <TextField value={question.answer[1]} label="Answer 2" variant="standard" fullWidth />
                                    </Grid>
                                    <Grid size={6}>
                                        <TextField value={question.answer[2]} label="Answer 3" variant="standard" fullWidth />
                                    </Grid>
                                    <Grid size={6}>
                                        <TextField value={question.answer[3]} label="Answer 4" variant="standard" fullWidth />
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
                    ))}
                </Grid>
                <Button variant="contained" onClick={() => setQuestions([...questions, questionObj])}>
                    Add Question
                </Button>
            </Grid>
        </>
    );
};

export default MyQuiz;
