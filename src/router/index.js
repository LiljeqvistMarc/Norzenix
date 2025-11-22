import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            // Wait 50ms for the page to paint before scrolling
            setTimeout(() => {
                if (to.hash) {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    })
                } else if (savedPosition) {
                    resolve(savedPosition)
                } else {
                    resolve({ top: 0 })
                }
            }, 50)
        })
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/project/property-management',
            name: 'project-details',
            component: ProjectDetails
        }
    ]
})

export default router