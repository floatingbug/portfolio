import { reactive } from "vue";

const userSettings = reactive({
	isLightMode: false,
	lang: "en"
});

export function useUser() {
	function setUserSettings(param) {
		const {isDarkMode, lang} = param;

		if(typeof isDarkMode !== "undefined") userSettings.isDarkMode = isDarkMode;

		if(typeof lang !== "undefined") userSettings.lang = lang;
	}

	return { setUserSettings, userSettings };
}
