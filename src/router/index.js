import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Monitoring from "@/views/Monitoring.vue"
import Chat from "@/views/Chat.vue"
import NotFound from "@/views/NotFound.vue"

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
        meta: {
            title: "pukito"
        }
    },
    {
        name: "Monitoring",
        path: "/monitoring",
        component: Monitoring,
        meta: {
            title: "monitoring"
        }
    },
    {
        name: "Chat",
        path: "/chat",
        component: Chat,
        meta: {
            title: "chat"
        }
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)",
        component: NotFound,
        meta: {
            title: "404"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from) => {
    document.title = to.meta.title;
});

export default router;