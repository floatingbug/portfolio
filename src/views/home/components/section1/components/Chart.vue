<script setup>
const props = defineProps({
	chartData: Array
});
</script>


<template>
	<div class="chart-content">
		<div class="bar-content" v-for="(bar, index) in chartData">

			<div class="bar-frame">
				<div class="bar" :style="{width: `${bar.percent}%`}">
					<div class="label">
						{{bar.label}}
					</div>

					<span>
						{{bar.percent}}%
					</span>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
.chart-content {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	font-size: 1rem;
	border-radius: var(--border-radius-rounded-hard);
}

.bar-frame {
	width: 100%;
	border: 1px solid var(--p-primary-900);
	border-radius: var(--border-radius-rounded-hard);
}

.bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: var(--border-radius-rounded-hard);
	color: var(--p-zinc-900);
	background-color: var(--p-primary-300);
}

.bar :last-child {
margin-right: 1rem;
}

.bar :first-child {
margin-left: 1rem;
}
</style>
