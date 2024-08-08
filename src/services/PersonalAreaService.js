import axiosInstance from './axiosConfig';

export const PersonalAreaService = {
    async fetchProfile(userId) {
        const response = await axiosInstance.get(`/users/${userId}`, { withCredentials: true });
        return response.data;
    },

    async fetchCourses(userId) {
        const response = await axiosInstance.get(`/users/${userId}/courses`, { withCredentials: true });
        return response.data;
    },

    async fetchAchievements(userId) {
        const response = await axiosInstance.get(`/user-achievements/user/${userId}`, { withCredentials: true });
        return response.data;
    },

    async fetchMaterials(userId) {
        const response = await axiosInstance.get(`/course-materials/user/${userId}`, { withCredentials: true });
        return response.data;
    },

    async fetchCourseDetails(courseId, userId) {
        const [lessonsResponse, quizzesResponse, enrolmentResponse] = await Promise.all([
            axiosInstance.get(`/lessons/course/${courseId}`, { withCredentials: true }),
            axiosInstance.get(`/quizzes/course/${courseId}`, { withCredentials: true }),
            axiosInstance.get(`/enrolments/${courseId}/${userId}`, { withCredentials: true })
        ]);

        const lessons = lessonsResponse.data;
        const quizzes = quizzesResponse.data;
        const enrolment = enrolmentResponse.data;

        const totalLessonsAndQuizzes = lessons.length + quizzes.length;
        const completedLessons = enrolment.progress;

        const progress = totalLessonsAndQuizzes > 0 ? (completedLessons / totalLessonsAndQuizzes) * 100 : 0;

        return {
            lessons,
            quizzes,
            progress
        };
    }
};