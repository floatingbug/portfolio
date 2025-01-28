<script setup>
import GithubButton from "../components/GithubButton.vue";


const props = defineProps({
	translation: Object
});

</script>


<template>    
	<div class="hero-section-container">
		<div class="hero-section-content">
			<div class="left">
				<span class="header-1">
					<b>
						{{translation.heroSection.header1}}
					</b>
				</span>
				
				<span class="header-2">
					<b>
						{{translation.heroSection.header2}}
					</b>
				</span>

				<span class="about-text">
					{{translation.heroSection.aboutText}}
				</span>

				<div class="button-container">
					<GithubButton></GithubButton>
				</div>
			</div>

			<Divider layout="vertical"></Divider>

			<div class="right">
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
	width: 50%;
	min-width: 950px;
	height: 50%;
	max-height: 800px;
	display: flex;
	gap: 4rem;
	border: 1px solid var(--hero-card-border-color);
	border-radius: var(--border-radius-rounded-soft);
	padding: 2rem 4rem;
	background-color: var(--hero-card-bg);
	backdrop-filter: blur(8px);

	.left, .right {
		flex: 1;
	}

	.left {
		display: flex;
		flex-direction: column;

		.header-1 {
			font-size: 2rem;
		}

		.header-2 {
			font-size: 4rem;
			margin-top: 2rem;
		}

		.about-text {
			font-size: 1.6rem;
			margin-top: 3rem;
		}

		.button-container {
			width: 100%;
			height: 80px;
			display: flex;
			align-items: center;
			gap: 2rem;
			margin-top: auto;
		}
	}

	.right {
		display: flex;
		align-items: center;

		img {
			width: 100%;
		}
	}
}
</style>
