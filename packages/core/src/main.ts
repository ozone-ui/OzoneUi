import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import wave from 'v-wave'

import { Btn, Card, Flex } from './components/index'
import './index.css'

const app = createApp(App)

app.use(wave)
app.component('Btn', Btn)
app.component('Card', Card)
app.component('Flex', Flex)

app.use(createPinia())

app.mount('#app')
