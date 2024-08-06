import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/MainPage.vue";
import FindCourse from "@/pages/CourseSearchPage.vue";
import About from "@/pages/AboutPage.vue";
import SearchResults from "@/pages/SearchResultsPage.vue";
import CoursePage from "@/pages/CoursePage.vue";
import CourseContentPage from '@/pages/CourseContentPage.vue';
import PersonalArea from "@/pages/PersonalAreaPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import requireAuth from "@/router/authGuard.js";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/FindCourse',
        name: '/FindCourse',
        component: FindCourse
    },
    {
        path: '/AboutPage',
        name: 'About',
        component: About
    },
    {
        path: '/Search-results',
        name: 'SearchResults',
        component: SearchResults
    },
    {
        path: '/course/:courseID',
        name: 'CoursePage',
        component: CoursePage,
        props: true,
        beforeEnter: requireAuth,
    },
    {
        path: '/content/:itemType/:itemID',
        name: 'CourseContentPage',
        component: CourseContentPage,
        props: route => ({
            itemID: Number(route.params.itemID),
            itemType: route.params.itemType,
        }),
        beforeEnter: requireAuth,
    },
    {
        path: '/PersonalArea',
        name: 'PersonalArea',
        component: PersonalArea,
        beforeEnter: requireAuth,
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;