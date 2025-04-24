<script setup>
const props = defineProps({
	projectData: Object,
});

</script>


<template>    
	<div class="project-container card">
		<header>
			<h2>{{projectData.name}}</h2>
		</header>

		<main>
			<div class="description">
				{{projectData.description}}
			</div>
			
			<div class="features">
				<h3>Features:</h3>

				<ul>
					<li class="feature"
						v-for="(feature, index) in projectData.features"
						:key="index"
					>
						{{feature}}
					</li>
				</ul>
			</div>
		</main>

		<footer>
			<span>Visit <a :href="projectData.url" target="_blank">{{projectData.name}}</a></span>
		</footer>
	</div>
</template>   


<style scoped>
.project-container {
	flex: 1;
	width: 100%;
	min-width: 280px;
	display: flex;
	flex-direction: column;
}

header, main, footer {
	display: flex;
	flex-direction: column;
}

header {
	margin-top: 2rem;
	align-items: center;

	h2 {
		text-decoration: underline;
		letter-spacing: 0.05rem;
		color: var(--p-amber-500);
	}
}

main {
	height: 100%;
	margin-top: 1rem;

	.description {
		height: 20%;
		padding: 0 1rem;
		margin-top: 1rem;
	}

	.features {
		height: 80%;
		padding: 0 1rem;
		margin-top: 2rem;

		h3 {
			margin-bottom: 0.5rem;
			color: var(--p-amber-500);
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		li {
			font-size: 0.8rem;
			margin-left: 1rem;
		}

		li::marker {
			color: var(--p-amber-500);
		}
	}
}

footer {
	align-items: center;
	padding: 1rem 0;
	margin-top: auto;
	margin-bottom: 1rem;

	a {
		color: var(--p-amber-500);
	}
}

@media(min-width: 480px){
	main {
		.description {
			font-size: 1.2rem;
		}

		.features {
			margin-top: 2rem;

			li {
				font-size: 1rem;
			}
		}
	}
}
</style>
