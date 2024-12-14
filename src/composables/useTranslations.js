import {ref} from "vue";
import {translations} from "./translations.js";


const translation = ref(translations.en);


export function useTranslations(){
	function setTranslation(lang){
		if(lang === "en"){
			translation.value = translations.en;
		}
		else if(lang === "de"){
			translation.value = translations.de;
		}
	}

	return {translation, setTranslation}
}
