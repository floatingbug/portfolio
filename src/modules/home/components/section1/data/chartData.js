import {ref} from "vue";


const frontEnd = ref([
	{
		label: "JavaScript",
		percent: 95,
	},
	{
		label: "HTML",
		percent: 90,
	},
	{
		label: "CSS",
		percent: 80,
	},
	{
		label: "Vue.js",
		percent: 90,
	},
]);

const backEnd = ref([
	{
		label: "JavaScript",
		percent: 95,
	},
	{
		label: "Node.js",
		percent: 90,
	},
	{
		label: "Express.js",
		percent: 90,
	},
	{
		label: "MongoDB",
		percent: 80,
	},
]);


export const chartData = {
	frontEnd,
	backEnd,
};
