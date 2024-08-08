import axiosInstance from './axiosConfig';

export const TestService = {
    async fetchQuestions(quizId) {
        const response = await axiosInstance.get(`/quizzes/${quizId}/questions`, { withCredentials: true });
        return response.data;
    },

    async checkTestStatus(studentId, quizId) {
        const response = await axiosInstance.get(`/student-quiz-attempts/check`, {
            params: { studentId, quizId },
            withCredentials: true
        });
        return response.data;
    },

    async submitTest(studentId, quizId, answers) {
        const resultData = {
            student: { id: studentId },
            quiz: { id: quizId },
            answers: answers
        };

        const response = await axiosInstance.post('/student-quiz-attempts', resultData, { withCredentials: true });
        return response.data;
    }
};