<script setup>
import {ref} from "vue";
import Carousel from "primevue/carousel";


const props = defineProps({
	items: Array
});


const responsiveOptions = ref([
]);
</script>


<template>
	<Carousel :value="items" :numVisible="1" :numScroll="1">
		<template #item="slotProps">
			<div class="projects-container">

				<!-- Slide 1 -->

				<div v-if="slotProps.data.slide === 1" class="slide-1">
					<div class="mid">
						<div class="top">
							<h1>
								{{slotProps.data.label}}
							</h1>
						</div>

						<div class="mid">
							{{slotProps.data.description}}
						</div>

						<div class="bottom">
							<span>{{slotProps.data.instruction}}</span>
						</div>
					</div>
				</div>

				<!-- Slide 2 -->

				<div v-if="slotProps.data.slide === 2" class="slide-2 slides">
					<div class="left">
						<img :src="slotProps.data.imgUrl" alt="">
					</div>

					<Divider layout="vertical"></Divider>

					<div class="right">
						<div class="top">
							<h3>
								{{slotProps.data.header}}
							</h3>
						</div>

						<div class="mid">
							<span>
								{{slotProps.data.description}}
							</span>
						</div>
					</div>
				</div>

				<!-- Slide 3 -->

				<div v-if="slotProps.data.slide === 3" class="slide-3 slides">
					<div class="left">
						<img :src="slotProps.data.imgUrl" alt="">
					</div>

					<Divider layout="vertical"></Divider>

					<div class="right">
						<div class="top">
							<h3>
								{{slotProps.data.header}}
							</h3>
						</div>

						<div class="mid">
							<span>
								{{slotProps.data.description}}
							</span>
						</div>
					</div>
				</div>


				<!-- Slide 4 -->
				
				<div v-if="slotProps.data.slide === 4" class="slide-4 slides">
					<div class="left">
						<img :src="slotProps.data.imgUrl" alt="">
					</div>

					<Divider layout="vertical"></Divider>

					<div class="right">
						<div class="top">
							<h3>
								{{slotProps.data.header}}
							</h3>
						</div>

						<div class="mid">
							<span>
								{{slotProps.data.description}}
							</span>
						</div>
					</div>
				</div>
				<!-- Slide 5 -->
				
				<div v-if="slotProps.data.slide === 5" class="slide-5 slides">
					<div class="left">
						<img :src="slotProps.data.imgUrl" alt="">
					</div>

					<Divider layout="vertical"></Divider>

					<div class="right">
						<div class="top">
							<h3>
								{{slotProps.data.header}}
							</h3>
						</div>

						<div class="mid">
							<span>
								{{slotProps.data.description}}
							</span>
						</div>
					</div>
				</div>

				<!-- Slide 6 -->
				
				<div v-if="slotProps.data.slide === 6" class="slide-6 slides">
					<header>
						<h1>
							{{slotProps.data.header}}
						</h1>
					</header>

					<main>
						<div class="description">
							{{slotProps.data.description}}
						</div>

						<div class="features">
							<span>{{slotProps.data.features.ownLists}}</span>
							<span>{{slotProps.data.features.createLists}}</span>
							<span>{{slotProps.data.features.rating}}</span>
						</div>

						<div class="more-features">
							<span>{{slotProps.data.features.more}}</span>
						</div>
					</main>
				</div>
			</div>
		</template>
	</Carousel>
</template>


<style scoped>
.projects-container {
	height: 100%;
	min-height: 400px;
	max-height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--border-color-light);
	overflow: hidden;
}

.slides {
	height: 100%;
	max-height: 800px;
	display: flex;
	align-items: center;

	.p-divider-vertical {
		height: 100px;
		min-height: 80%;
	}

	.left, .right  {
		flex: 1 1 280px; 
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem;
	}

	.left {
		img {
			width: 100%;
			border: 1px solid var(--border-color);
		}
	}

	.right {
		gap: 1rem;
		text-align: center;

		h3 {
			color: var(--p-primary-color);
		}
	}
}

.slide-1 {
	height: 400px;

	.mid {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;

		.top {
			padding: 2rem 0;
		}
		
		.mid {
			width: 100%;
			max-width: 800px;
			text-align: center;
		}

		.bottom {
			text-align: center;
			padding: 6rem 0;
			color: var(--p-primary-color);
		}
	}

}

.slide-6 {
	display: flex;
	flex-direction: column;

	h1 {
		padding: 4rem 0 1rem 0;
		text-align: center;
		color: var(--p-primary-color);
	}

	.description {
		text-align: center;
		padding: 0 0 2rem 0;
	}

	.features {
		display: flex;
		flex-direction: column;
		font-size: 1rem;
		text-align: center;
	}

	.more-features {
		text-align: center;
		padding: 2rem 0 0 0;
	}
}

@media(max-width: 1400px) {
	.slides {
		flex-direction: column-reverse;
		justify-content: flex-end;

		.p-divider {
			display: none;
		}

		.right {
			flex: .3;
		}
	}

	.projects-container {
		max-height: 100%;
		height: 800px;
		align-items: flex-start;
		padding: 1rem;
	}

	.slide-1 {
		.mid {
			.top {
				padding: 0 0 2rem 0;
			}

			.bottom {
				padding: 4rem 0;
			}
		}
	}

	.slide-6 {
		flex-direction: column;
		justify-content: flex-start;
	}
}

@media(max-width: 800px) {
	.projects-container {
		max-height: 400px;
	}

	.slides {
		font-size: 1rem;

		h3 {
			font-size: 1rem;
		}

		.right {
			flex: 0.3;
			padding: 1rem;
		}

		.left {
			padding: 0;
		}
	}

	.slide-1 {
		font-size: 1rem;
	}
	
	.slide-6 {
		h1 {
			padding: 0 0 .5rem 0;
		}
	}
}
</style>
