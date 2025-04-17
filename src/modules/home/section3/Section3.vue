<script setup>
import {ref, reactive, onMounted, watch} from "vue";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import { useToast } from 'primevue/usetoast';
import sendMessage from "./service/sendMessage.js";
import device from "@/composables/device.js";
import ProgressSpinner from 'primevue/progressspinner';


const contactData = reactive({
	subject: "",
	email: "",
	message: ""
});

const toast = useToast();
const captchaKey = ref(import.meta.env.VITE_CAPTCHA_KEY);
const errorMessage = ref("");
const isProgress = ref(false);
const showPrivacyNote = ref(false);


onMounted(() => {
	const script = document.createElement('script');
	script.src = 'https://www.google.com/recaptcha/api.js';
	script.async = true;
	script.defer = true;

	document.head.appendChild(script);
});


watch(() => contactData, () => {
	errorMessage.value = "";
}, {deep: true});


async function sendEmail(){
	isProgress.value = true;
	const token = grecaptcha.getResponse();

	const result = await sendMessage({
		subject: contactData.subject,
		email: contactData.email,
		message: contactData.message,
		token
	});

	console.log(result);

	if(!result.success){
		errorMessage.value = "The message could not be sent. Please try again. If the problem persists, please contact me at thomas.hof1984@gmail.com."
		isProgress.value = false;
		return;
	}

	window.scrollTo({top: 0, behavior: "smooth"});
	toast.add({ severity: 'info', summary: 'Message', detail: 'Thank you for contacting me. I will get back to you as soon as possible.', life: 5000 });
	contactData.subject = "";
	contactData.email = "";
	contactData.message = "";

	isProgress.value = false;
}
</script>


<template>
	<div class="section-container">
		<ProgressSpinner 
			v-if="isProgress" 
			class="card"
			style="position: absolute; top: 0; width: 100%; height: 100%; z-index: 1000;">
		</ProgressSpinner>

		<div class="section-content">
			<h1 class="section-header">
				<span>#</span> Contact me
			</h1>

			<div class="form-container">
				<div class="form-content" :class="{card: device.size >= 600}">
					<div class="top">
						<div class="top-left">
							<InputGroup>
								<InputGroupAddon>
									<i class="pi pi-comment" style="color: var(--p-amber-500)"></i>
								</InputGroupAddon>
							
								<FloatLabel>
									<InputText id="subject" v-model="contactData.subject"></InputText>
									<label for="subject">Subject</label>
								</FloatLabel>
							</InputGroup>
						</div>
									
						<div class="top-right">
							<InputGroup>
								<InputGroupAddon>
									<i class="pi pi-envelope" style="color: var(--p-amber-500)"></i>
								</InputGroupAddon>
							
								<FloatLabel>
									<InputText id="email" v-model="contactData.email"></InputText>
									<label for="email">E-Mail</label>
								</FloatLabel>
							</InputGroup>
						</div>
					</div>
					
					<div class="mid">
						<FloatLabel>
							<Textarea id="message" v-model="contactData.message"></Textarea>
							<label for="message">Message</label>
						</FloatLabel>
					</div>
					
					
					<div class="bottom">
						<div class="captcha-container">
							<div class="g-recaptcha" :data-sitekey="captchaKey"></div>
						</div>
						
						<div v-if="errorMessage" class="error-message">
							{{errorMessage}}
						</div>

						<div class="privacy-note">
							By submitting the form, you agree that your data will be used to process your request. For more information, please see the 
							<Button
								as="router-link"
								to="/legal-notice"
								variant="link"
								style="padding: 0;"
								@click="showPrivacyNote = true;"
							>
								privacy policy
							</Button>.
						</div>
				
						<div class="submit-button">
							<Button @click="sendEmail">Send Message</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
.section-container {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
}

.section-content {
	width: 90%;
}

.form-container {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 8dvh;
}

.form-content{
	width: 100%;
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.top {
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}

.top-left, .top-right {
	width: 100%;
}

.mid {
	width: 90%;
	display: flex;
	justify-content: center;
	margin-top: 2rem;


	.p-floatlabel {
		width: 100%;
	}

	.p-textarea {
		width: 100%;
	}
}

.bottom {
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 2rem;

	.p-button {
		margin-top: 2rem;
	}
	
	.captcha-container {
		width: 100%;
	}

	.captcha-container .g-recaptcha {
		transform:scale(0.77);
		transform-origin:0 0;
	}
}

.card {
	padding: 2rem 0;
}

.error-message {
	color: var(--p-red-500);
}

@media(min-width: 480px) {
	.mid .p-textarea {
		min-height: 300px;
	}
}

@media(min-width: 600px) {
	.top {
		flex-direction: row;
	}
}
</style>
