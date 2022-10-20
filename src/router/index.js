import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Topics from "@/views/Topics.vue"
import Monitoring from "@/views/Monitoring.vue"
import Chat from "@/views/Chat.vue"
import NotFound from "@/views/NotFound.vue"
import Keyboard from "@/views/Keyboard.vue"
import Test from "@/views/Test.vue"

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
        name: "Topics",
        path: "/topics",
        component: Topics,
        meta: {
            title: "topics"
        }
    },
    {
        name: "Keyboard",
        path: "/keyboard",
        component: Keyboard,
        meta: {
            title: "keyboard"
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
        name: "Test",
        path: "/test",
        component: Test,
        meta: {
            title: "test"
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