<script setup>
import {onMounted} from "vue";
import {useTranslations} from "@/composables/useTranslations.js";


const {translation} = useTranslations();


</script>

<template>
	<div class="hero-content">
		<div class="left">
			<div class="top">
				<h3 v-html="translation.heroSection.header1"></h3>
				<h1 v-html="translation.heroSection.header2"></h1>
				<p v-html="translation.heroSection.aboutText"></p>
			</div>

			<div class="bottom">
				<div class="links">
					<Button icon="pi pi-github" size="large" variant="outlined" rounded raised></Button>
					<Button icon="pi pi-github" size="large" variant="outlined" rounded raised></Button>
					<Button icon="pi pi-github" size="large" variant="outlined" rounded raised></Button>
				</div>
			</div>
		</div>

		<div class="right">
			<div class="img-container">
				<img src="/src/assets/img/developer.svg" alt="">
			</div>
		</div>
	</div>
</template>

<style scoped>
.hero-content {
	display: flex;
	border-radius: var(--border-radius-rounded-hard);
	border: 1px solid var(--hero-card-border-color);
	background-color: var(--hero-card-bg);
	backdrop-filter: blur(10px);
	user-select: none;
}

.left, .right {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4rem;
}

.left {
	flex: 1;
	padding: 2rem;
}

.right {
	flex: 1;
}

.left .top {
	max-width: 600px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-size: 1.8rem;
}

.left .bottom {
	width: 100%;
	display: flex;
	flex-direction: column;
}

.left .bottom .links {
	width: 50%;
	min-width: 200px;
	display: flex;
	justify-content: space-evenly;
}

.img-container {
	display: flex;
	justify-content: center;
}

.img-container img {
	width: 80%;
}


@media(max-width: 550px) {
	.hero-content {
		flex-direction: column;
	}

	.left .top {
		font-size: 1.2rem;
	}

	.img-container {
		display: none;
	}
}
</style>
