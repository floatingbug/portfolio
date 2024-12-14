<script setup>
import Project from "./components/Project.vue";
import {projects} from "./data/projects.js";

</script>


<template>
	<div class="section-2-content">
		<div class="top">
			<h1>Projects</h1>
		</div>

		<div class="mid">
			<div class="projects-container">
				<Project class="project" v-for="(project, index) in projects" :project="project">
				</Project>
			</div>
		</div>
	</div>
</template>


<style scoped>
.top {
	display: flex;
	justify-content: center;
}

.mid {
	display: flex;
	justify-content: center;
}

.projects-container {
	max-width: 800px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
}

.project {
	width: 20%;
	min-width: 280px;
	padding: 1rem;
	background-color: var(--card-bg);
}
</style>
