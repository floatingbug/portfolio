<script setup>
import Project from "./components/Project.vue";
import projectsData from "./data/projectsData.js";

</script>


<template>
	<div class="section-container">
		<div class="section-content">
			<header>
				<h1 class="section-header">
					<span>#</span>Projects
				</h1>
			</header>

			<main>
				<dev class="projects-container">
					<Project :projectData="projectsData.myMovielist" />
					
					<Project :projectData="projectsData.wasKochen" />
				</dev>
			</main>
			
			<footer>
			</footer>
		</div>
	</div>
</template>


<style scoped>
.section-container {
	background-color: var(--projects-section-bg);
}

main {
	margin-top: 2rem;
	
	.projects-container {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 2rem;
	}
}

</style>

