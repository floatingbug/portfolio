<script setup>
const emit = defineEmits();


function closeNavbar(){
	emit("toggle:action", {
		action: "closeNavbar"
	});
}
</script>


<template>    
	<Button @click="closeNavbar" severity="secondary" variant="text" rounded>
		<i class="pi pi-times-circle" style="font-size: 3rem"></i>
	</Button>
</template>   


<style scoped>
</style>
