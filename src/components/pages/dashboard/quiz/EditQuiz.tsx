"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import QuizEditForm from "./QuizEditForm";
import { Box, LinearProgress } from "@mui/material";

const EditQuiz = () => {
    const { quizId } = useParams();

    const [quizDetails, setQuizDetails] = useState();

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = async () => {
        try {
            const { data } = await axios.get(`/quiz/edit/${quizId}`);
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {quizDetails
                ?
                <QuizEditForm defaultValues={quizDetails} />
                :
                <Box className="flex items-start justify-center h-screen flex-col">
                    <h1 className="text-center">Loading...</h1>
                </Box>
            }
        </>
    );
};

export default EditQuiz;
