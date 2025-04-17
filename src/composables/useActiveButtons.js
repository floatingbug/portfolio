import {ref} from "vue";


const activeButtons = ref({
	homeButton: false,
	aboutButton: false,
	projectsButton: false,
});


export function useActiveButtons(){
	
	function activateButton(buttonName){
		Object.keys(activeButtons.value).forEach(key => {
			activeButtons.value[key] = false;
		});

		switch(buttonName){
			case "homeButton": activeButtons.value[buttonName] = true;
			break;
			case "aboutButton": activeButtons.value[buttonName] = true;
			break;
			case "projectsButton": activeButtons.value[buttonName] = true;
			break;
		}
	}


	return {activeButtons, activateButton}
}
