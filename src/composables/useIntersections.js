import {ref} from "vue";


const intersections = ref({
	isSection1Intersecting: false,
	isSection2Intersecting: false,
	isSection3Intersecting: false,
});


export function useIntersections(){


	return {intersections};
}
