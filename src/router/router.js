import { createRouter, createWebHistory } from 'vue-router'
import NewWorkout from "@/views/NewWorkout.vue";

const routes = [
    // {
    //     path: '/',
    //     redirect: '/new-quotation'
    // },
    {
        path: '/new-workout',
        name: 'new-workout',
        component: NewWorkout
    },
]

export default createRouter({
    routes,
    history: createWebHistory()
})
