<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import TheNavbar from "./components/navbar/TheNavbar.vue";
import { useUser } from "./store/useUser.js";
import device from "./composables/device.js";
import {useActiveButtons} from "@/composables/useActiveButtons.js";
import Toast from 'primevue/toast';
import Footer from "./modules/home/footer/Footer.vue";


const {userSettings} = useUser();
const {activateButton} = useActiveButtons();
const showScrollToTopButton = ref(false);


onMounted(async () => {
	const html = document.documentElement;

	//handle dark-mode
	const isLightMode = localStorage.getItem("isLightMode");

	if (isLightMode === true || isLightMode === "true") {
		html.classList.remove("dark-mode");
		userSettings.isLightMode = true;
	}
	else{
		html.className = "dark-mode";
		userSettings.isLightMode = false;
	}

	//handle device size
	device.size = window.innerWidth;

	window.addEventListener("resize", () => {
		device.size = window.innerWidth;
	});

	//handle scroll
	window.addEventListener("scroll", () => {
		showScrollToTopButton.value = window.scrollY > 300 ? true : false;
	});
});


function scrollToTop(){
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

	activateButton('');
}

</script>

<template>
	<TheNavbar></TheNavbar>
	<Toast /> 

	
	<Button
		v-show="showScrollToTopButton"
		class="scroll-to-top-button"
		severity="contrast"
		rounded
		style="padding: 0.4rem;"
		@click="scrollToTop"
	>
		<i class="pi pi-arrow-up" 
			style="
				font-size: 1.2rem;
				color: var(--text-color);
			"
		></i>
	</Button>


	<RouterView />
	<Footer></Footer>
</template>

<style scoped>
.scroll-to-top-button {
	position: fixed;
	bottom: 0.5rem;
	right: 0.5rem;
	z-index: 1000;
}
</style>
