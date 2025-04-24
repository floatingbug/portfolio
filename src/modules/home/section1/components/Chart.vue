<script setup>
const props = defineProps({
	data: Array,
});
</script>


<template>    
	<div class="container">
		<header>
			<slot name="header"></slot>
		</header>
		
		<main>
			<div class="chart-row"
				v-for="(data, index) in data" :key="index"
			>

				<div class="line-indicator"
					:style="{width: `${data.percent}%`}"
				>
					<span>{{data.label}}</span>
					<span>{{data.percent}}%</span>
				</div>

			</div>
		</main>
	</div>
</template>   


<style scoped>
.container {
	width: 100%;
	max-width: 800px;
	padding: 1rem;
}

main {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;
}

.chart-row {
	height: 30px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1rem;
	border-radius: var(--border-radius-rounded-soft);
	border-right: 1px solid var(--border-color);
	border-left: 1px solid var(--border-color);
}

.line-indicator {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.1rem 0.5rem;
	border-radius: var(--border-radius-rounded-soft);
	background-color: var(--chart-line-indicator);
}

.line-indicator span {
	color: var(--text-primary-bg);
}
</style>
