import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import wave from 'v-wave'

import { Btn, Card, Flex, Txt } from './components/index'
import './index.css'
import './lib/bundle.js'

const app = createApp(App)

app.use(wave)
app.component('Btn', Btn)
app.component('Card', Card)
app.component('Flex', Flex)
app.component('Txt', Txt)

app.use(createPinia())

app.mount('#app')
