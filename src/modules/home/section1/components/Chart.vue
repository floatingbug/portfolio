<script setup>
const props = defineProps({
	data: Array,
});
</script>


<template>    
	<div class="container card">
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
	border-radius: var(--border-radius-rounded-soft);
	border: 1px solid var(--border-color);
}

.line-indicator {
	display: flex;
	justify-content: space-between;
	border-radius: var(--border-radius-rounded-soft);
	padding: 0.4rem 0.5rem;
	background-color: var(--chart-line-indicator);
}

.line-indicator span {
	color: var(--text-primary-bg);
}
</style>
