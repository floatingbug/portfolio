<script setup>
import { ref } from "vue";
import ToggleSwitch from "primevue/toggleswitch";
import { useUser } from "@/store/useUser.js";

const { setUserSettings, userSettings } = useUser();

function handleChangeAction(isChecked) {
	const html = document.documentElement;

	if (isChecked) {
		localStorage.setItem("isDarkMode", true);
		html.className = "dark-mode";
	} else {
		localStorage.setItem("isDarkMode", false);
		html.classList.remove("dark-mode");
	}

	setUserSettings({ isDarkMode: isChecked });
}
</script>

<template>
	<ToggleSwitch
		v-model="userSettings.isDarkMode"
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
