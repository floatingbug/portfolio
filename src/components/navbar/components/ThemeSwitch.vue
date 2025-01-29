<script setup>
import { ref, onMounted } from "vue";
import ToggleSwitch from "primevue/toggleswitch";
import { useUser } from "@/store/useUser.js";


const { setUserSettings, userSettings } = useUser();
const isChecked = ref(true);


onMounted(() => {
	isChecked.value = userSettings.isLightMode ? false : true;
});


function handleChangeAction(isChecked) {
	const html = document.documentElement;

	if (!isChecked) {
		localStorage.setItem("isLightMode", true);
		html.classList.remove("dark-mode");
	} else {
		localStorage.setItem("isLightMode", false);
		html.className = "dark-mode";
	}

	setUserSettings({ isLightMode: !isChecked });
}
</script>

<template>
	<ToggleSwitch
		v-model="isChecked"
		@update:modelValue="handleChangeAction"
	>
		<template #handle="{ checked }">
			<i :class="{'pi pi-moon': checked, 'pi pi-sun': !checked}" style="font-size: .8rem; line-height: 0;"></i>
		</template>
	</ToggleSwitch>
</template>


<style scoped>
.p-toggleswitch {
	user-select: none;
}
</style>
