"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import QuizEditForm from "./QuizEditForm";
import { Box } from "@mui/material";
import { statusOptions, languageOptions, correctAnswerOptions } from "./QuizEditSchema";

const EditQuiz = () => {
    const { quizId } = useParams();

    const [quizDetails, setQuizDetails] = useState();

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = async () => {
        try {
            const { data } = await axios.get(`/quiz/edit/${quizId}`);
            data.status = statusOptions.find((val) => val.value === data.status);
            data.language = languageOptions.find((val) => val.value === data.language);
            data.questions.map((question: any) => {
                question.answer = question.answers.map((val: any, index: number) => {
                    if (val.isCorrect) question.correctAnswer = correctAnswerOptions[index];
                    return val.answer;
                });
            });
            setQuizDetails(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {quizDetails
                ?
                <QuizEditForm defaultValues={quizDetails} quizId={quizId as string} />
                :
                <Box className="flex items-start justify-center h-screen flex-col">
                    <h1 className="text-center">Loading...</h1>
                </Box>
            }
        </>
    );
};

export default EditQuiz;
