import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import FindCourse from "@/pages/FindCourse.vue";
import About from "@/pages/About.vue";
import SearchResults from "@/pages/SearchResults.vue";
import CoursePage from "@/pages/CoursePage.vue";
import LessonPage from '@/pages/LessonPage.vue';
import PersonalArea from "@/pages/PersonalArea.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/FindCourse',
        component: FindCourse
    },
    {
        path: '/About',
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
        props: true
    },
    {
        path: '/content/:itemID',
        name: 'LessonPage',
        component: LessonPage,
        props: true
    },
    {
        path: '/PersonalArea',
        name: 'PersonalArea',
        component: PersonalArea,
        //props: true
    },
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;