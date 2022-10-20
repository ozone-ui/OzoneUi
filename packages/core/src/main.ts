import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import Ripple from 'vue-ripple-directive'

import { Btn, Card } from './components/index'
import './index.css'

const app = createApp(App)

// app.directive('ripple', Ripple)
app.component('Btn', Btn)
app.component('Card', Card)

app.use(createPinia())

app.mount('#app')
