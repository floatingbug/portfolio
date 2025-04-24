<script setup>
import {useActiveButtons} from "@/composables/useActiveButtons.js";


const {activeButtons, activateButton} = useActiveButtons();

</script>


<template>    
	<nav>
		<ul class="left">
			<li class="label-container">
				<div class="label">bytom</div>
				<div class="label-background"></div>
			</li>

		</ul>

		<ul class="right">
			<div class="button-container">
				<div class="buttons">
					<ul class="buttons-left">
						<li>
							<Button
								as="a"
								href="#home"
								:class="{'hover-button-active': activeButtons.homeButton}"
								severity="contrast"
								variant="text"
								:pt="{
									root: {
										class: 'hover-button',
									}
								}"
								@click="activateButton('homeButton')"
							>
								Home
							</Button>
						</li>
						
						<li>
							<Button
								as="a"
								href="#about"
								:class="{'hover-button-active': activeButtons.aboutButton}"
								severity="contrast"
								variant="text"
								:pt="{
									root: {
										class: 'hover-button',
									}
								}"
								@click="activateButton('aboutButton')"
							>
								About
							</Button>
						</li>
						
						<li>
							<Button
								as="a"
								href="#projects"
								:class="{'hover-button-active': activeButtons.projectsButton}"
								severity="contrast"
								variant="text"
								:pt="{
									root: {
										class: 'hover-button',
									}
								}"
								@click="activateButton('projectsButton')"
							>
								Projects
							</Button>
						</li>
					</ul>

					<ul class="buttons-right">
						<li>
							<Button 
								as="a"
								href="#contact"
								class="button-primary"
								@click="activateButton('')"
							>
								Contact
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</ul>
	</nav>
</template>   


<style scoped>
nav {
	width: 100%;
	position: fixed;
	display: flex;
	padding: 1rem 1rem;
	border-bottom: 1px solid var(--border-color-light);
	background-color: var(--navbar-desktop-bg);
	backdrop-filter: blur(8px);
	z-index: 1000;
}

.p-button {
	text-decoration: none;
}

.left, .right {
	flex: 1;
	display: flex;
	list-style: none;
}

.label-container {
	width: 50%;
	position: relative;
	display: flex;
	align-items: center;
}

.label-container .label {
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	font-size: 1.4rem;
	padding: 0 0.5rem;
	z-index: 1;
}

.label-container .label-background{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
}

.button-container {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: flex-end;
}

.buttons {
	position: relative;
	display: flex;
	justify-content: space-between;
	z-index: 1;
}

.buttons-left {
	position: relative;
	display: flex;
	gap: 1rem;
	list-style: none;
}

.hover-button:before {
	content: "";
    width: 80%;
	position: absolute;
	bottom: 0;
    left: 10%;
    height: 3px;
    background: linear-gradient(to right, transparent, var(--p-amber-500), transparent);
	border-radius: 2px;
	transform: scaleX(0);
	transform-origin: center;
	transition: transform 250ms;
}

.hover-button:hover {
	background-color: unset !important;
}

.hover-button:hover:before {
	transform: scaleX(1);
}

.hover-button.hover-button-active:before {
	transform: scaleX(1);
}

.buttons-right {
	list-style: none;
}
</style>
