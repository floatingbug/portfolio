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

			<div class="contact">
				<div class="contact-left">
					<div class="contact-intro">
						Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
					</div>
					
					<div class="contact-informations">
						<div class="contact-info">
							<i class="pi pi-map-marker"></i>
							<span>Rennerod, Germany</span>
						</div>
						
						<div class="contact-info">
							<i class="pi pi-phone"></i>
							<span>+49 1522 8958 094</span>
						</div>
						
						<div class="contact-info">
							<i class="pi pi-envelope"></i>
							<span>thomas.hof1984@gmail.com</span>
						</div>
					</div>
				</div>

				<div class="contact-right">
					<div class="contact-form">
						<div class="contact-form-input">
							<InputGroup>
								<InputGroupAddon>
									<i class="pi pi-comment" style="color: var(--p-amber-500)"></i>
								</InputGroupAddon>
							
								<FloatLabel>
									<InputText id="subject" v-model="contactData.subject"></InputText>
									<label for="subject">Subject</label>
								</FloatLabel>
							</InputGroup>
							
							<InputGroup>
								<InputGroupAddon>
									<i class="pi pi-envelope" style="color: var(--p-amber-500)"></i>
								</InputGroupAddon>
							
								<FloatLabel>
									<InputText id="email" v-model="contactData.email"></InputText>
									<label for="email">E-Mail</label>
								</FloatLabel>
							</InputGroup>
							
							<FloatLabel>
								<Textarea id="message" v-model="contactData.message"></Textarea>
								<label for="message">Message</label>
							</FloatLabel>
						</div>
						
						
						<div class="contact-captcha-container">
							<div class="g-recaptcha" :data-sitekey="captchaKey"></div>
						</div>
						
						<div v-if="errorMessage" class="error-message">
							{{errorMessage}}
						</div>
					
						<div class="contact-submit-button">
							<Button @click="sendEmail">Send Message</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
.contact {
	margin-top: 3rem;
	margin-bottom: 12rem;
}

.contact-informations {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 4rem;

	.contact-info {
		span {
			margin-left: 1rem;
		}
	}
}

.contact-form-input {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 3rem;

	.p-textarea {
		width: 100%;
	}
}

.contact-captcha-container {
	margin-top: 2rem;
}

.contact-submit-button {
	margin-top: 2rem;

	.p-button {
		width: 100%;
	}
}

@media(min-width: 1024px) {
	.contact {
		display: flex;
		gap: 2rem;

		.contact-left, .contact-right {
			flex: 1;
		}
	}

	.contact-form-input {
		margin-top: 0;
	}

	.contact-intro {
		max-width: 300px;
	}
}
</style>
