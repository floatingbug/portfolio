<script setup>
import device from "@/composables/device.js";
import MainCardMobile from "./components/MainCardMobile.vue";
import MainCardDesktop from "./components/MainCardDesktop.vue";

</script>


<template>    
	<div class="hero-container">
		<MainCardMobile v-if="device.size < 1200"></MainCardMobile>
		<MainCardDesktop v-else></MainCardDesktop>
	</div>
</template>   


<style scoped>
.hero-container {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid var(--border-color);
	background: linear-gradient(120deg, var(--gradient-colors));
}

</style>
