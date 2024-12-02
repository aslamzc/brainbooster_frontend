"use client";
import { useState } from 'react';
import axios from "@/utils/axios";
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { form, QuizCreateFormType, Controller, questionObj, correctAnswerOptions, languageOptions, statusOptions } from './QuizEditSchema';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNotifications } from '@toolpad/core/useNotifications';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useRouter } from "next/navigation";

type Props = {
    defaultValues: QuizCreateFormType,
    quizId: string
};

const QuizEditForm = ({ defaultValues, quizId }: Props) => {

    const [expanded, setExpanded] = useState<number | null>(0);
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [quizLoading, setQuizLoading] = useState(false);
    const [btnStatus, setBtnStatus] = useState(true);
    const [paragraphError, setParagraphError] = useState('');
    const [open, setOpen] = useState(false);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [paragraph, setParagraph] = useState('');
    const notifications = useNotifications();
    const { push } = useRouter();
    const { handleSubmit, control, getValues, setValue, watch } = form(defaultValues);

    watch('questions');

    const handleClose = () => {
        setOpen(false);
        setBtnStatus(true);
    };

    const confirmDeleteClose = () => {
        setConfirmDeleteOpen(false);
    }

    const generateQuiz = async () => {
        try {
            setQuizLoading(true);
            const payload = {
                text: paragraph
            };
            const { data } = await axios.post('/quiz/generate', payload);
            setValue('questions', [...getValues('questions') ?? [], ...data]);
            handleClose();
            setParagraph('');
            setQuizLoading(false);
            notifications.show('Quiz generated successfully', {
                severity: 'success', autoHideDuration: 3000
            });
        } catch (error: any) {
            console.error(error);
            setParagraphError(error?.message ?? '');
            setQuizLoading(false);
            setBtnStatus(false);
        }
    }

    const onSubmit = async (data: QuizCreateFormType) => {
        try {
            setLoading(true);
            await axios.post(`/quiz/update/${quizId}`, data);
            setLoading(false);
            notifications.show('Quiz Updated successfully', {
                severity: 'success', autoHideDuration: 3000
            });
        } catch (error) {
            console.error(error);
        }
    }

    const deleteQuiz = async () => {
        try {
            setDeleteLoading(true);
            await axios.delete(`/quiz/delete/${quizId}`);
            setDeleteLoading(false);
            notifications.show('Quiz deleted successfully', {
                severity: 'success', autoHideDuration: 3000
            });
            confirmDeleteClose();
            push(`/dashboard/quiz`);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={1}>
                    <Grid size={3}>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    label="Title"
                                    variant="standard"
                                    {...field}
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={3}>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    label="Description"
                                    variant="standard"
                                    {...field}
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={3}>
                        <Controller
                            name="language"
                            control={control}
                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                <Autocomplete
                                    value={value}
                                    options={languageOptions}
                                    onChange={(_, selectedOptions) => onChange(selectedOptions)}
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            label="Language"
                                            variant="standard"
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={3}>
                        <Controller
                            name="status"
                            control={control}
                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                <Autocomplete
                                    value={value}
                                    options={statusOptions}
                                    onChange={(_, selectedOptions) => onChange(selectedOptions)}
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            label="Status"
                                            variant="standard"
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    }
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={1} justifyContent="flex-end"
                    alignItems="flex-end">
                    <Grid size={12}>
                        {getValues('questions')?.map((question, index) => (
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
                                    {index !== expanded && (question.question ? question.question : 'Add Question')}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                                        <Grid size={12}>
                                            <Controller
                                                name={`questions.${index}.question`}
                                                control={control}
                                                render={({ field, fieldState: { error } }) => (
                                                    <TextField
                                                        fullWidth
                                                        label="Question"
                                                        variant="standard"
                                                        {...field}
                                                        error={!!error}
                                                        helperText={error?.message}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <Controller
                                                name={`questions.${index}.answer.0`}
                                                control={control}
                                                render={({ field, fieldState: { error } }) => (
                                                    <TextField
                                                        fullWidth
                                                        label="Answer 1"
                                                        variant="standard"
                                                        {...field}
                                                        error={!!error}
                                                        helperText={error?.message}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <Controller
                                                name={`questions.${index}.answer.1`}
                                                control={control}
                                                render={({ field, fieldState: { error } }) => (
                                                    <TextField
                                                        fullWidth
                                                        label="Answer 2"
                                                        variant="standard"
                                                        {...field}
                                                        error={!!error}
                                                        helperText={error?.message}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <Controller
                                                name={`questions.${index}.answer.2`}
                                                control={control}
                                                render={({ field, fieldState: { error } }) => (
                                                    <TextField
                                                        fullWidth
                                                        label="Answer 3"
                                                        variant="standard"
                                                        {...field}
                                                        error={!!error}
                                                        helperText={error?.message}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <Controller
                                                name={`questions.${index}.answer.3`}
                                                control={control}
                                                render={({ field, fieldState: { error } }) => (
                                                    <TextField
                                                        fullWidth
                                                        label="Answer 4"
                                                        variant="standard"
                                                        {...field}
                                                        error={!!error}
                                                        helperText={error?.message}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <Controller
                                                name={`questions.${index}.correctAnswer`}
                                                control={control}
                                                render={({ field: { value, onChange }, fieldState: { error } }) => (
                                                    <Autocomplete
                                                        value={value}
                                                        options={correctAnswerOptions}
                                                        onChange={(_, selectedOptions) => onChange(selectedOptions)}
                                                        renderInput={(params) =>
                                                            <TextField
                                                                {...params}
                                                                label="Correct Answer"
                                                                variant="standard"
                                                                error={!!error}
                                                                helperText={error?.message}
                                                            />
                                                        }
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid>
                                            <Button
                                                variant="contained"
                                                color='error'
                                                onClick={() => {
                                                    const updatedQuestions = getValues('questions')?.filter((_, idx) => idx !== index);
                                                    setValue('questions', updatedQuestions);
                                                }}
                                                endIcon={<DeleteIcon />}
                                            >
                                                Remove Question
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                    <Button
                        variant="contained"
                        onClick={() => { setOpen(true) }}
                        endIcon={<AutoFixHighIcon />}
                    >
                        Generate Quiz
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setValue('questions', [...getValues('questions') ?? [], questionObj]);
                            setExpanded((getValues('questions')?.length ?? 0) - 1);
                        }}
                        endIcon={<AddIcon />}
                    >
                        Add Question
                    </Button>
                </Grid>
                <br />
                <Grid container spacing={1} justifyContent="flex-end" alignItems="flex-end">
                    <Grid>
                        <LoadingButton
                            loading={loading}
                            disabled={getValues('questions')?.length === 0}
                            type="submit"
                            variant="contained"
                            color='success'
                            endIcon={<UpdateIcon />}
                        >
                            Update
                        </LoadingButton>
                    </Grid>
                    <Grid>
                        <LoadingButton
                            variant="contained"
                            color='error'
                            endIcon={<DeleteIcon />}
                            onClick={() => { setConfirmDeleteOpen(true) }}
                        >
                            Delete
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Paragraph to Quiz Generation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Utilizing OpenAI ChatGPT for transforming text paragraphs into engaging quizzes, enabling efficient learning and knowledge assessment.
                    </DialogContentText>
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            multiline
                            fullWidth
                            label="Paragraph"
                            name="paragraph"
                            variant="outlined"
                            minRows={10}
                            maxRows={20}
                            value={paragraph}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length < 50) {
                                    setParagraphError('At least 50 characters required');
                                    setBtnStatus(true);
                                } else {
                                    setParagraphError('');
                                    setBtnStatus(false);
                                }
                                setParagraph(value);
                            }}
                            error={!!paragraphError}
                            helperText={paragraphError}
                            sx={{ "& .MuiFormHelperText-root": { marginLeft: 0 } }}
                        />
                        <LoadingButton
                            loading={quizLoading}
                            disabled={btnStatus}
                            onClick={generateQuiz}
                            variant="contained"
                            color='primary'
                            endIcon={<AutoFixHighIcon />}
                        >
                            Generate
                        </LoadingButton>
                    </Box>
                </DialogContent>
            </Dialog>
            <Dialog
                open={confirmDeleteOpen}
                onClose={confirmDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Confirm Delete
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this quiz?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmDeleteClose}>Cancel</Button>
                    <LoadingButton
                        onClick={deleteQuiz}
                        loading={deleteLoading}
                        autoFocus
                        color='error'
                        endIcon={<DeleteIcon />}
                    >
                        Delete
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default QuizEditForm;
