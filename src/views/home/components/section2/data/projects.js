import {ref, reactive, computed} from "vue";
import {useTranslations} from "@/composables/useTranslations.js";


const {translation} = useTranslations();
const slide1Data = ref(translation.value.section2.projects.myMovielist.slide1);
const slide2Data = ref(translation.value.section2.projects.myMovielist.slide2);
const slide3Data = ref(translation.value.section2.projects.myMovielist.slide3);
const slide4Data = ref(translation.value.section2.projects.myMovielist.slide4);
const slide5Data = ref(translation.value.section2.projects.myMovielist.slide5);
const slide6Data = ref(translation.value.section2.projects.myMovielist.slide6);


export const projects = reactive({
	myMovielist: [
		{
			slide: 1,
			label: "myMovielist",
			description: slide1Data.value.description,
			instruction: slide1Data.value.instruction,
		},
		{
			slide: 2,
			label: "Project 1",
			imgUrl: slide2Data.value.imgUrl,
			header: slide2Data.value.header,
			description: slide2Data.value.description,
		},
		{
			slide: 3,
			label: "Project 1",
			imgUrl: slide3Data.value.imgUrl,
			header: slide3Data.value.header,
			description: slide3Data.value.description,
		},
		{
			slide: 4,
			label: "Project 1",
			imgUrl: slide4Data.value.imgUrl,
			header: slide4Data.value.header,
			description: slide4Data.value.description,
		},
		{
			slide: 5,
			label: "Project 1",
			imgUrl: slide5Data.value.imgUrl,
			header: slide5Data.value.header,
			description: slide5Data.value.description,
		},
		{
			slide: 6,
			label: "Project 1",
			header: slide6Data.value.header,
			description: slide6Data.value.description,
			features: slide6Data.value.features,
		},
	],
});
