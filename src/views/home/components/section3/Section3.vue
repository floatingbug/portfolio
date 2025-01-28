<script setup>
import {ref, reactive, onMounted} from "vue";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import {useTranslations} from "@/composables/useTranslations.js";
import {sendMessage} from  "./helpers/sendMessage.js";


const {translation} = useTranslations();
const contactData = reactive({
	subject: "",
	email: "",
	message: ""
});

const captchaKey = ref(import.meta.env.VITE_CAPTCHA_KEY);


onMounted(() => {
	const script = document.createElement('script');
	script.src = 'https://www.google.com/recaptcha/api.js';
	script.async = true;
	script.defer = true;

	document.head.appendChild(script);
});


async function sendEmail(){
	const token = grecaptcha.getResponse();

	const data = await sendMessage({
		subject: contactData.subject,
		email: contactData.email,
		message: contactData.message,
		token
	});

	console.log(data);
}
</script>


<template>
	<div class="contact">
		<header>
			<h1>
				{{translation.section3.header1}}
			</h1>
		</header>

		<main>
			<div class="form">
				<div class="top">
					<InputGroup>
						<InputGroupAddon>
							<i class="pi pi-comment"></i>
						</InputGroupAddon>
					
						<FloatLabel>
							<InputText id="subject" v-model="contactData.subject"></InputText>
							<label for="subject">Subject</label>
						</FloatLabel>
					</InputGroup>
					
					<InputGroup>
						<InputGroupAddon>
							<i class="pi pi-envelope"></i>
						</InputGroupAddon>
					
						<FloatLabel>
							<InputText id="email" v-model="contactData.email"></InputText>
							<label for="email">E-Mail</label>
						</FloatLabel>
					</InputGroup>
				</div>

				<div class="mid">
					<FloatLabel>
						<Textarea id="message" v-model="contactData.message"></Textarea>
						<label for="message">Message</label>
					</FloatLabel>
				</div>

				<div class="g-recaptcha" :data-sitekey="captchaKey"></div>

				<div class="bottom">
					<div class="submit-button">
						<Button @click="sendEmail">Send Message</Button>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>


<style scoped>
.contact {
}

header {
	display: flex;
	justify-content: center;
}

main {
	width: 100%;
	display: flex;
	justify-content: center;
}

.form {
	width: 100%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	gap: 4rem;

	.top {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.mid {
		.p-textarea {
			width: 100%;
			min-height: 300px;
		}
	}

	.bottom {
		width: 100%;

		.p-button {
			width: 100%;
		}
	}
}
</style>
