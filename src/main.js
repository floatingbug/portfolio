import "./assets/main.css";
import 'primeicons/primeicons.css'


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { definePreset } from '@primevue/themes';
import semantic from "./theming/semantic.js";
import components from "./theming/components.js";
import Button from "primevue/button";
import Divider from "primevue/divider";
import ToastService from 'primevue/toastservice';


const app = createApp(App);

const customizedTheme = definePreset(Aura, {
	semantic,
	components,
});


app.use(PrimeVue, {
	theme: {
		preset: customizedTheme,
		options: {
			darkModeSelector: ".dark-mode",
		},
	},
});

app.use(ToastService);
app.use(router);

app.component("Button", Button);
app.component("Divider", Divider);

app.mount("#app");
