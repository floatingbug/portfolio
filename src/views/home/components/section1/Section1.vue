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

			<p>
				Consectetur recusandae aliquid vero labore ipsam doloribus! Dignissimos eveniet inventore reiciendis exercitationem nulla! Quam obcaecati quasi itaque voluptate neque dolores alias Odit molestias sequi sunt dicta id qui. Aspernatur autem!
			</p>
		</div>
		
		<div class="technologies-skills">
			<div class="top">
				<h1 v-html="translation.section1.header2"></h1>
			</div>

			<div class="bottom">
				<div class="descrption">
					Dolor libero ducimus reiciendis eaque dolore. Voluptatem optio minima repudiandae dolor modi Exercitationem beatae deserunt exercitationem quidem distinctio Aut provident ipsam illum culpa distinctio velit eaque. Nulla nesciunt beatae rem
				</div>

				<Chart class="chart" :chartData="chartData"></Chart>
			</div>
		</div>
	</div>
</template>


<style scoped>
.about {
	display: flex;
	flex-direction: column;
	gap: 4rem;
}

.technologies-skills {
	display: flex;
	flex-direction: column;
	margin-top: 6rem;
	gap: 4rem;
}

.technologies-skills .bottom {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	padding: 1rem;
	border-radius: var(--border-radius-rounded-hard);
	background-color: var(--card-bg);
}

.technologies-skills .bottom>* {
	min-width: 280px;
	flex: 1;
}

.chart {
	width: 100%;
}
</style>	
