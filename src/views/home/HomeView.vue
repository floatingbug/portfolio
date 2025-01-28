<script setup>
import HeroSection from "./components/heroSection/HeroSection.vue";
import Section1 from "./components/section1/Section1.vue";
import Section2 from "./components/section2/Section2.vue";
import Section3 from "./components/section3/Section3.vue";
import Footer from "./components/footer/Footer.vue";


</script>

<template>
	<div class="hero-container" id="hero">
		<HeroSection class=""></HeroSection>
	</div>

	<div class="section-container" id="section-1">
		<Section1 class="section"></Section1>
	</div>

	<div class="section-container" id="section-2">
		<Section2 class="section"></Section2>
	</div>

	<div id="section-3" class="section-container last-section">
		<Section3 class="section"></Section3>
	</div>

	<div id="footer" class="footer-container">
		<Footer></Footer>
	</div>
</template>

<style setup>
/*Global Styles*/
.section-container {
	min-height: 100dvh;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid var(--p-primary-color);
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
	background-image: url(/img/hero_bg.svg);
	background-size: cover;
}

/* Section 2 */

#section-2 {
	background-color: var(--section-bg);
}

.last-section {
	border-bottom: none;
}


/* Footer */
.footer-container {
	display: flex;
	justify-content: center;
	padding: 2rem;
	border-top: 1px solid var(--p-primary-color);
	margin-top: 2rem;
}
</style>
