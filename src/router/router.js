import { createRouter, createWebHistory } from 'vue-router'
import NewQuotationView from "@/views/NewWorkout.vue";


const routes = [
    // {
    //     path: '/',
    //     redirect: '/new-quotation'
    // },
    {
        path: '/new-quotation',
        name: 'new-quotation',
        component: NewQuotationView
    },
]

export default createRouter({
    routes,
    history: createWebHistory()
})
