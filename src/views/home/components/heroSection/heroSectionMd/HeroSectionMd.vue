<script setup>
import GithubButton from "../components/GithubButton.vue";


const props = defineProps({
	translation: Object
});
</script>


<template>    
	<div class="hero-section-container">
		<div class="hero-section-content">
			<div class="button-container">
				<GithubButton></GithubButton>
			</div>

			<div class="top">
				<span class="header-1">
					<b>
						{{translation.heroSection.header1}}
					</b>
				</span>

				<span class="header-2">
					{{translation.heroSection.header2}}
				</span>

				<span class="about-text">
					{{translation.heroSection.aboutText}}
				</span>
			</div>

			<Divider></Divider>

			<div class="bottom">
				<img src="/src/assets/img/developer.svg" alt="">
			</div>
		</div>
	</div>
</template>   


<style scoped>
.hero-section-container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.hero-section-content {
	width: 90%;
	height: 90%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 1rem;
	padding: 2rem 4rem;
	border: 1px solid var(--hero-card-border-color);
	border-radius: var(--border-radius-rounded-soft);
	background-color: var(--hero-card-bg);
	backdrop-filter: blur(8px);
	overflow: hidden;

	.top {
		display: flex;
		flex-direction: column;

		.header-1 {
			font-size: 2rem;
		}

		.header-2 {
			font-size: 4rem;
			margin-top: 1rem;
		}

		.about-text {
			font-size: 1.4rem;
			margin-top: 2rem;
		}
	}

	.bottom {
		img {
			width: 100%;
		}
	}

	.button-container {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
}
</style>
