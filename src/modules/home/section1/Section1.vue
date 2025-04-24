<script setup>
import chartData from "./data/chartData.js";
import Chart from "./components/Chart.vue";

</script>


<template>
	<div class="section-container">
		<div class="section-content">
			<main>
				<div class="top">
					<h1 class="section-header">
						<span>#</span> Who am I?
					</h1>
					
					<p>
						<span style='display: inline-block;'>H</span>ello, my name is Thomas, but everyone calls me Tom. I have been involved in web development for many years, and the passion for it continues to drive me.
					</p>
					
					<p>
						The first lines of code I wrote a long time ago were in C. Back then, I programmed a few games in both C and C++. I wanted to showcase these games on a website, which led me to web development. I started exploring all aspects of web development, such as how the Domain Name System or the Internet works. Both the technical aspects and the development itself in the field of web development fascinate me to this day and will continue to do so in the future.
					</p>
				</div>
				
				<div class="bottom">
					<h1 class="section-header">
						<span style='color: var(--p-primary-color);'>#</span> Skills
					</h1>
				
					<div class="chart-container">
						<Chart :data="chartData.frontEnd">
							<template #header>
								<h3 style="color: var(--p-amber-500);">Front End</h3>
							</template>
						</Chart>
					
						<Chart :data="chartData.backEnd">
							<template #header>
								<h3 style="color: var(--p-amber-500);">Back End</h3>
							</template>
						</Chart>
					</div>
					
					<p>
						Of course, there are many other technologies and skills, such as the shell in Unix-based systems or the field of DevOps in general. Since it would be too extensive to mention them all, I have only listed the most important ones.
					</p>
				</div>
			</main>
		</div>
	</div>
</template>


<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

main .top p, main .bottom p {
	margin-top: 1rem;
}

.chart-container {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 2rem;
	margin-top: 1rem;
}

@media(min-width: 768px){
	main {
		gap: 8rem;
	}
	
	main .bottom p {
		margin-top: 3rem;
	}

	.chart-container {
		flex-wrap: nowrap;
	}
}

</style>	
