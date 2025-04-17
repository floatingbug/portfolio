<script setup>
import {ref} from "vue";


const isNavbarOpen = ref(false);


function closeNavbar(event){
	if(event.target.localName === "a" || event.target.localName === "i"){
		isNavbarOpen.value = false;
	}
}

</script>


<template>    
	<nav>
		<div class="menu-button-open">
			<Button 
				variant="text"
				@click="isNavbarOpen = true"
			>
				<i class="pi pi-bars" style="font-size: 1.6rem; color: var(--p-amber-500)"></i>
			</Button>
		</div>

		<ul class="navbar-list-container" :class="isNavbarOpen ? 'navbar-open' : ''">
			<li class="navbar-list-content"
				@click="closeNavbar"
			>
				<ul class="top">
					<li class="top-left">
						<li class="label-container">
							<div class="label">bytom</div>
							<div class="label-background"></div>
						</li>
					</li>

					<li class="top-right">
						<Button
							variant="text"
							@click="isNavbarOpen = false"
						>
							<i class="pi pi-times" style="font-size: 1.4rem;"></i>
						</Button>
					</li>
				</ul>
				
				<ul class="mid">
					<li>
						<Button 
							as="a"
							href="#home"
							raised
						>
							Home
						</Button>
					</li>

					<li>
						<Button 
							as="a"
							href="#about"
							raised
						>
							About
						</Button>
					</li>

					<li>
						<Button 
							as="a"
							href="#projects"
							raised
						>
							Projects
						</Button>
					</li>

					<li>
						<Button 
							as="a"
							href="#contact"
							raised
						>
							Contact
						</Button>
					</li>
				</ul>
				
				<ul class="bottom">
					<li>
						<Button 
							as="a"
							to=""
							variant="text"
						>
							<i class="pi pi-github" style="font-size: 1.4rem; color: var(--p-amber-500)"></i>
						</Button>
						
						<Button 
							as="a"
							href="https://www.linkedin.com/in/thomas-hof-a9a40a317/"
							target="_blank"
							variant="text"
						>
							<i class="pi pi-linkedin" style="font-size: 1.4rem; color: var(--p-amber-500)"></i>
						</Button>
						
						<Button variant="text">
							<i class="pi pi-facebook" style="font-size: 1.4rem; color: var(--p-amber-500)"></i>
						</Button>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>   


<style scoped>
nav {
	width: 100%;
	position: absolute;
	z-index: 100;
}

ul {
	list-style: none;
}

.p-button {
	text-decoration: none;
}

.navbar-list-container {
	list-style: none;
	transform: translateY(-100%);
	transition: transform 250ms;
}

.menu-button-open {
	position: absolute;
}

.navbar-list-container {
	width: 100%;
	height: 100dvh;
	position: absolute;
	backdrop-filter: blur(8px);
	background-color: var(--navbar-mobile-bg);
}

.navbar-list-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.top {
	display: flex;
}

.label-container {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	padding: 1.4rem 0;
}

.label-container .label {
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	font-size: 1.4rem;
	color: var(--text-primary-bg);
	border-radius: 0 var(--border-radius-rounded-soft) var(--border-radius-rounded-soft) 0;
	padding: 0 1rem;
	z-index: 1;
	background-color: var(--p-primary-color);
}

.label-container .label-background{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: linear-gradient(90deg, var(--label-gradient-colors));
	z-index: 0;
}

.top-left {
	width: 80%;
}

.top-right {
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.mid {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.mid li {
	display: flex;
	justify-content: center;
}

.mid .p-button {
	width : 80%;
}

.navbar-open {
	transform: translateY(0);
}
</style>
