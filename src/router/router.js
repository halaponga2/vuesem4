import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage"
import AboutPage from "@/pages/AboutPage"
import GoodsPage from "@/pages/GoodsPage"

const routes = [ {
    path: "/",
    component: MainPage,
},
{
    path: "/about",
    component: AboutPage,
},
{
    path: "/goods",
    component: GoodsPage,}
]

const router = createRouter({routes, history: createWebHistory()})

export default router;