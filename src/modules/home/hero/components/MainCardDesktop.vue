<script setup>
import {useActiveButtons} from "@/composables/useActiveButtons.js";


const {activeButtons, activateButton} = useActiveButtons();

</script>


<template>    
	<div class="card">
		<div class="left">
			<div class="top">
				<h3>
					Hello I'm A
				</h3>
				
				<h1>
					Fullstack Web-Developer.
				</h1>
				
				<p>
					Hi, I’m Thomas Hof, a passionate full-stack web developer from Germany.
				</p>
			</div>
			
			<div class="mid">
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

			<div class="bottom">
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

		<Divider layout="vertical"></Divider>
		
		<div class="right">
			<div class="image-container">
				<img src="/public/img/developer.svg" alt="">
				<div class="image-frame"></div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.p-button {
	text-decoration: none;
}

.card {
	width: 90%;
	max-width: 1400px;
	max-height: 650px;
	display: flex;
	padding: 1rem;
	margin-top: 15rem;
}

.left, .right {
	flex: 1;
	padding: 3rem;
}

.left {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.left h1 {
	font-size: 4rem;
}

.left h3 {
	font-size: 2rem;
}

.left p {
	font-size: 1.4rem;
	margin-top: 1rem;
}

.left .mid {
	margin-top: 1rem;
}

.left .bottom {
	margin-top: 2rem;
}

.mid {
	display: flex;
	gap: 1rem;
}

.right {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.right .image-container {
	width: 100%;
	position: relative;
	margin-right: 3rem;
	z-index: 2;
}

.right img {
	width: 100%;
	position: relative;
	z-index: 1;
}

.right .image-frame {
	width: 100%;
	position: absolute;
	inset: 2rem;
	z-index: 0;
	border-radius: var(--border-radius-rounded-soft);
	border: 4px solid var(--border-color);
}
</style>
