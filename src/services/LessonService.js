import axiosInstance from './axiosConfig';

export const LessonService = {
    async checkLessonStatus(studentId, lessonId) {
        const response = await axiosInstance.get(`/student-lessons/check`, {
            params: { studentId, lessonId },
            withCredentials: true
        });
        return response.data;
    },

    async completeLesson(studentLessonDto) {
        const response = await axiosInstance.post('/student-lessons', studentLessonDto, { withCredentials: true });
        return response.data;
    }
};
