<script setup>
import {ref} from "vue";
import ThemeSwitch from "./ThemeSwitch.vue";
import LanguageMenu from "./LanguageMenu.vue";
import CloseNavbarButton from "./CloseNavbarButton.vue";

const props = defineProps({
	isNavbarClosed: Boolean,
});


const emit = defineEmits(["toggle:action"]);


function handleButtonClick(event){
	if(event.target.dataset.action === "closeNavbar"){
		emit("toggle:action", {
			action: "closeNavbar"
		});
	}
}


function handleNavbarAction(event){
	if(event.action === "closeNavbar"){
		emit("toggle:action", event);
	}
}
</script>


<template>    
	<div class="navbar-md" :class="{'navbar-closed': isNavbarClosed}">
		<div class="top">
			<div class="left">
				<h1>
					bytom
				</h1>
			</div>
			
			<div class="right">
				<ThemeSwitch></ThemeSwitch>
				<LanguageMenu></LanguageMenu>
			</div>
		</div>

		<div class="mid" @click="handleButtonClick">
			<Button as="a" href="#hero" data-action="closeNavbar" raised>Home</Button>
			<Button as="a" href="#section-1" data-action="closeNavbar" raised>About</Button>
			<Button as="a" href="#section-2" data-action="closeNavbar" raised>Projects</Button>
			<Button as="a" href="#section-3" data-action="closeNavbar" raised>Contact</Button>
		</div>

		<div class="bottom">
			<CloseNavbarButton @toggle:action="handleNavbarAction"></CloseNavbarButton>
		</div>
	</div>
</template>   


<style scoped>
.navbar-md {
	width: 100%;
	height: 50dvh;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--navbar-md-sd-bg);
	backdrop-filter: blur(8px);
	z-index: 1000;
	transition: transform 250ms;

	.top {
		width: 100%;
		height: 20%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--navbar-border-color);
		background-color: var(--navbar-md-sd-bg);

		.left {
			border-radius: 30px;
			border: 1px solid var(--border-color-light);
			padding: 1rem 2rem;
			margin-left: 2rem;
			color: var(--p-primary-color);
			background-color: var(--navbar-md-sd-bg);
		}
		
		.right {
			height: 100%;
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 0 2rem;
			margin-right: 4rem;
			background-color: var(--navbar-md-sd-bg-dark);
		}
	}

	.mid {
		width: 50%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		.p-button {
			height: 50px;
			width: 100%;
			text-decoration: none;
		}
	}

	.bottom {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding: 0 2rem 2rem 0;
	}
}

.navbar-closed {
	transform: translateY(-100%);
}
</style>
