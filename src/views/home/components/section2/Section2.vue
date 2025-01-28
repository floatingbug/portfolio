<script setup>
import Carousel from "./components/Carousel.vue";
import {projects} from "./data/projects.js";
import {useTranslations} from "@/composables/useTranslations.js";


const {translation} = useTranslations();
</script>


<template>
	<div class="section-2-content">
		<header>
			<h1>Projects</h1>
		</header>

		<main>
			<div class="carousel-container">
				<div class="top">
					<h3>
						myMovielist
					</h3>

					<Button as="a" href="https://bytom.dev/mymovielist/" target="_blank" variant="link">Visit myMovielist</Button>
				</div>

				<Carousel :items="projects.myMovielist"></Carousel>
			</div>
		</main>

		<footer>
			<div class="more-soon">
				{{translation.section2.moreSoon}}
			</div>
		</footer>
	</div>
</template>


<style scoped>
.section-2-content {
	justify-content: space-around;
}

header {
	display: flex;
	justify-content: center;
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-bottom: 2rem;
}

.carousel-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;

	.top {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.p-carousel {
		width: 100%;
	}
}

@media(max-width: 1400px) {
	.carousel-container {
		width: 100%;
		max-width: 800px;
	}
}
</style>
