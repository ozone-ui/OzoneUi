import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { Btn, Card } from './components'
import './index.css'

const app = createApp(App)

app.component('Btn', Btn)
app.component('Card', Card)

app.use(createPinia())

app.mount('#app')
