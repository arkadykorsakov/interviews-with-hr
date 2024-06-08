import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from 'firebase/app'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'

import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import InlineMessage from 'primevue/inlinemessage'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import Radio from 'primevue/radiobutton'
import Tooltip from 'primevue/tooltip'
import Badge from 'primevue/badge'
import Chart from 'primevue/chart'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyAOTLfd_twrqf6tDf87Tc2HM98T60zPWK8',
  authDomain: 'interviews-10193.firebaseapp.com',
  projectId: 'interviews-10193',
  storageBucket: 'interviews-10193.appspot.com',
  messagingSenderId: '417805653929',
  appId: '1:417805653929:web:6830841915ef93f5cfd6b8'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.directive('tooltip', Tooltip)
app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', InlineMessage)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radio', Radio)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')
