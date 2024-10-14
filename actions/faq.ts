import { getFaqQuestions } from ".."

export const getQuestions = async () => {
    const questions = await getFaqQuestions();

    return questions;
}