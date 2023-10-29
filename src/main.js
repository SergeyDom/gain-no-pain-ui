import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import BaseCard from "@/components/base/BaseCard.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import NewWorkout from "@/views/NewWorkout.vue";

const app = createApp(App)
app.component('BaseCard', BaseCard)
app.component('TheHeader', TheHeader)
app.component('NewWorkout', NewWorkout)

app.use(router)

app.mount('#app')