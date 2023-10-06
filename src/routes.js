import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddRestaurent from './components/AddRestaurent.vue'
import UpdateRestaurent from './components/UpdateRestaurent.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/Sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/Login'
    },
    {
        name: 'AddRestaurent',
        component: AddRestaurent,
        path: '/AddRestaurent'
    },
    {
        name: 'LoginPage',
        component: UpdateRestaurent,
        path: '/UpdateRestaurent/:id'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router