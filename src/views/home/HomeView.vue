<script setup>
import HeroSection from "./components/HeroSection.vue";
import Section1 from "./components/section1/Section1.vue";
import Section2 from "./components/section2/Section2.vue";
import Section3 from "./components/section3/Section3.vue";


</script>

<template>
	<div class="hero-container" id="hero">
		<HeroSection class="hero-section"></HeroSection>
	</div>

	<div class="section-container" id="section-1">
		<Section1 class="section"></Section1>
	</div>

	<div class="section-container" id="section-2">
		<Section2 class="section"></Section2>
	</div>

	<div id="section-3" class="section-container">
		<Section3 class="section"></Section3>
	</div>

	<div id="footer" class="footer-container">

	</div>
</template>

<style setup>
/*Global Styles*/
.section-container {
	min-height: 100dvh;
	display: flex;
	justify-content: center;
	background-color: var(--hero-bg);
}

.section {
	display: flex;
	flex-direction: column;
	gap: 5rem;
	width: 90%;
	max-width: 1200px;
	height: 100%;
	margin-top: 6rem;
	font-size: 1.4rem;
	user-select: none;
}

/* Hero Section */
.hero-container {
	height: 100dvh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--hero-bg);
	background-image: url(/src/assets/img/hero_bg.svg);
	background-size: cover;
}

.hero-section {
	width: 90%;
	max-width: 1200px;
	height: 50%;
	min-height: 600px;
	margin-top: 2rem;
}
</style>
