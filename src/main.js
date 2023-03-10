import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Bootstrap Install
import "bootstrap"

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
