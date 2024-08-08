import axiosInstance from './axiosConfig';

export const CourseService = {
    async fetchCourses() {
        return axiosInstance.get('/courses');
    },

    async fetchCourseData(courseID, studentID) {
        const [courseResponse, lessonsResponse, quizzesResponse, reviewsResponse, isEnrolledResponse, enrolmentResponse] = await Promise.all([
            axiosInstance.get(`/courses/${courseID}`),
            axiosInstance.get(`/lessons/course/${courseID}`),
            axiosInstance.get(`/quizzes/course/${courseID}`),
            axiosInstance.get(`/reviews/course/${courseID}`),
            axiosInstance.get(`/enrolments/isEnrolled`, { params: { courseId: courseID, studentId: studentID } }),
            axiosInstance.get(`/enrolments/${courseID}/${studentID}`)
        ]);

        return {
            course: courseResponse.data,
            lessons: lessonsResponse.data,
            quizzes: quizzesResponse.data.map(quiz => ({
                ...quiz,
                type: 'quiz',
                name: quiz.title,
                lessonDetails: quiz.description,
                courseOrder: quiz.courseOrder
            })),
            reviews: reviewsResponse.data,
            isEnrolled: isEnrolledResponse.data,
            enrolment: enrolmentResponse.data
        };
    },

    async submitComment(commentData) {
        return axiosInstance.post('/reviews', commentData);
    },

    async fetchCurrentItem(itemID, itemType) {
        let response;
        if (itemType === 'quiz') {
            response = await axiosInstance.get(`/quizzes/${itemID}`, { withCredentials: true });
        } else {
            response = await axiosInstance.get(`/${itemType}s/${itemID}`, { withCredentials: true });
        }
        return response.data;
    },

    async fetchCourseContent(courseID) {
        const [lessonsResponse, quizzesResponse] = await Promise.all([
            axiosInstance.get(`/lessons/course/${courseID}`, { withCredentials: true }),
            axiosInstance.get(`/quizzes/course/${courseID}`, { withCredentials: true })
        ]);

        const lessons = lessonsResponse.data.map(lesson => ({
            ...lesson,
            type: 'lesson',
            prefixedID: `lesson-${lesson.id}`
        }));

        const quizzes = await Promise.all(quizzesResponse.data.map(async quiz => {
            const questionsResponse = await axiosInstance.get(`/quizzes/${quiz.id}/questions`, { withCredentials: true });
            const questionsData = questionsResponse.data;

            const questions = await Promise.all(questionsData.map(async question => {
                const answersResponse = await axiosInstance.get(`/quiz-questions/${question.id}/answers`, { withCredentials: true });
                return { ...question, answers: answersResponse.data };
            }));

            return {
                ...quiz,
                type: 'quiz',
                prefixedID: `quiz-${quiz.id}`,
                name: quiz.title,
                questions
            };
        }));

        return [...lessons, ...quizzes].sort((a, b) => a.courseOrder - b.courseOrder);
    },
    async startCourse(enrolmentDto) {
        const response = await axiosInstance.post('/enrolments', enrolmentDto, { withCredentials: true });
        return response.data;
    }
};
