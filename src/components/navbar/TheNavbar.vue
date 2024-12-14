<script setup>
import ThemeSwitch from "./components/ThemeSwitch.vue";
import LanguageMenu from "./components/LanguageMenu.vue";

</script>

<template>
	<div class="navbar-ld">
		<div class="left">
			<Button as="a" href="#hero" label="Home" variant="text" severity="secondary"></Button>
			<Button as="a" href="#section-1" label="About" variant="text" severity="secondary"></Button>
			<Button as="a" href="#section-2" label="Projects" variant="text" severity="secondary"></Button>
			<Button as="a" href="#section-3" label="Contact" variant="text" severity="secondary"></Button>
		</div>

		<div class="mid"></div>

		<div class="right">
			<ThemeSwitch></ThemeSwitch>
			<LanguageMenu></LanguageMenu>
		</div>
	</div>
</template>

<style scoped>
.navbar-ld {
	width: 100%;
	height: 50px;
	position: fixed;
	display: flex;
	justify-content: space-between;
	padding: 0 1rem;
	background-color: var(--navbar-ld-bg);
	backdrop-filter: blur(10px);
	z-index: 1000;
}

.navbar-ld > div {
	height: 100%;
	display: flex;
	align-items: center;
}


.navbar-ld .right {
	display: flex;
	gap: 1rem;
}

.navbar-ld .left a {
	text-decoration: none;
	font-size: 1.2rem;
}
</style>
