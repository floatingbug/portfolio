<script setup>
import {useTranslations} from "@/composables/useTranslations.js";
import Chart from "./components/Chart.vue";
import {chartData} from "./data/chartData.js";


const {translation} = useTranslations();


</script>


<template>
	<div class="section-1-content">
		<div class="about">
			<h1 v-html="translation.section1.header1"></h1>

			<p v-html="translation.section1.about.p1"></p>
			
			<p style="margin-top: 2rem;">
				{{translation.section1.about.p2}}
			</p>
		</div>
		
		<div class="technologies-skills">
			<header>
				<h1 v-html="translation.section1.header2"></h1>
			</header>

			<main>
				<div class="top">
					<div class="left">
						<h3>Front End</h3>

						<Chart class="chart" :chartData="chartData.frontEnd.value"></Chart>
					</div>

					<div class="right">
						<h3>Back End</h3>

						<Chart class="chart" :chartData="chartData.backEnd.value"></Chart>
					</div>
				</div>

				<div class="mid">
					<div class="description">
						{{translation.section1.description}}
					</div>
				</div>
			</main>
		</div>
	</div>
</template>


<style scoped>
.about {
	display: flex;
	flex-direction: column;
}

.technologies-skills {
	display: flex;
	flex-direction: column;
	margin-top: 6rem;
	gap: 4rem;

	main {
		display: flex;
		flex-direction: column;
		gap: 4rem;

		.top {
			display: flex;
			flex-wrap: wrap;
			gap: 2rem;
		}

		.description {
			padding-bottom: 2rem;
		}

		.top .left, .right {
			flex: 1 1 280px;
			display: flex;
			flex-wrap: wrap;
			border-radius: var(--border-radius-rounded-soft);
			background-color: var(--card-bg);

			h3 {
				color: var(--p-primary-color);
				padding: 1rem 0 1rem 1rem;
			}
		}
	}
}

.chart {
	width: 100%;
	min-width: 280px;
}
</style>	
