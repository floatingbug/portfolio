<script setup>
const emit = defineEmits();


function toggleNavbar(){
	emit("toggle:action", {
		action: "toggle"
	});
}
</script>


<template>    
	<Button class="toggle-button" @click="toggleNavbar" size="small">
		<i class="pi pi-bars" style="font-size: 1.2rem"></i>
	</Button>
</template>   


<style scoped>
.toggle-button {
	position: fixed;
	top: 0.5rem;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1000;
}
</style>
