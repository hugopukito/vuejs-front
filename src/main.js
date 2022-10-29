import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import VueLazyLoad from 'vue3-lazyload'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass)
library.add(faBars)

createApp(App)
.use(router)
.use(VueLazyLoad)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
