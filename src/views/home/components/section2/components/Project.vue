<script setup>
const props = defineProps({
	project: Object
});

</script>


<template>
	<div class="project-content">
		<header>
			<h3>{{props.project.label}}</h3>
		</header>
		
		<main>
		</main>
		
		<footer>
		</footer>
	</div>
</template>


<style scoped>
</style>
