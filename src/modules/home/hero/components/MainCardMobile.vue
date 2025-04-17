<script setup>
import device from "@/composables/device.js";
import {useActiveButtons} from "@/composables/useActiveButtons.js";


const {activeButtons, activateButton} = useActiveButtons();

</script>


<template>    
	<main class="card">
		<div class="top">
			<div class="top-left">
				<h3>
					Hello I'm A
				</h3>
				
				<h1>
					Fullstack Web-Developer.
				</h1>
				
				<p v-if="device.size > 540">
					Hi, I’m Thomas Hof, a passionate full-stack web developer from Germany.
				</p>
			</div>
			
			<div class="top-right">
				<div class="image-container">
					<img src="/public/img/developer.svg" alt="">
					<div class="image-frame"></div>
				</div>
			</div>

		</div>


		<div class="mid">
			<div v-if="device.size <= 540" class="mid-top">
				<p>
					Hi, I’m Thomas Hof, a passionate full-stack web developer from Germany.
				</p>
			</div>

			<Divider style="padding: 1rem 0;"></Divider>
			
			<div class="mid-mid">
				<Button 
					as="a"
					href="#contact"
					variant="outlined"
					style="
						border: none;
						color: var(--p-primary-50);
						background: linear-gradient(90deg, var(--button-gradient-colors));
					"
					raised
					@click="activateButton('')"
				>
					Contact
				</Button>
				
				<Button 
					as="a"
					href="#about"
					@click="activateButton('aboutButton')"
				>
					About me
				</Button>
			</div>
			
			<div class="mid-bottom">
				<Button as="a" href="https://github.com/floatingbug" target="_blank" variant="text">
					<i class="pi pi-github" style="font-size: 1.4rem; color: var(--p-amber-500)"></i>
				</Button>
				
				<Button as="a" href="https://www.linkedin.com/in/thomas-hof-a9a40a317/" target="_blank" variant="text">
					<i class="pi pi-linkedin" style="font-size: 1.4rem; color: var(--p-amber-500)"></i>
				</Button>
				
				<Button as="a" href="https://www.facebook.com/profile.php?id=61572414130134" target="_blank" variant="text">
					<i class="pi pi-facebook" style="font-size: 1.4rem; color: var(--p-amber-500)"></i>
				</Button>
			</div>
		</div>

		<div class="bottom">
		</div>
	</main>
</template>   


<style scoped>
.p-button {
	text-decoration: none;
}

.card {
	width: 90%;
	padding: 1rem;
	margin-top: 4rem;
}

.top {
	display: flex;
}

.top-left {
	width: 70%;
}

.top-right {
	width: 30%;
}

.top-right .image-container {
	width: 100%;
	position: relative;
	z-index: 2;
	margin-right: 1rem;
}

.top-right img {
	width: 100%;
	position: relative;
	z-index: 1;
}

.top-right .image-frame {
	width: 100%;
	position: absolute;
	inset: 0.5rem;
	z-index: 0;
	border-radius: var(--border-radius-rounded-soft);
	border: 4px solid var(--p-primary-color);
}

.mid {
	display: flex;
	flex-direction: column;
}

.mid-mid {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
}

.mid-mid .p-button {
	width: 30%;
	min-width: 150px;
}

.mid-bottom {
	margin-top: 3rem;
}

@media(min-width: 480px){
	.card {
		margin-top: 10rem;
	}
}


@media(min-width: 540px){
	.card {
		margin-top: 12rem;
	}

	.top-left h3 {
		font-size: 2rem;
	}

	.top-left h1 {
		font-size: 3rem;
	}

	.top-left p {
		font-size: 1.4rem;
		margin-top: 1rem;
	}
}
</style>
