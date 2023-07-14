import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()
// Javascript키
window.Kakao.init('4fa1dd072c8dc3e2ee857b0c3cbe76bd')
createApp(App).use(router).use(store).use(vuetify).mount('#app')
