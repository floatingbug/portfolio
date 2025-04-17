<script setup>
import {ref, onMounted} from "vue";
import HeroSection from "./hero/Hero.vue";
import Section1 from "./section1/Section1.vue";
import Section2 from "./section2/Section2.vue";
import Section3 from "./section3/Section3.vue";
import {useIntersections} from "@/composables/useIntersections.js";


const {intersections} = useIntersections();


onMounted(() => {
	const section1 = document.getElementById("about");
	const section2 = document.getElementById("projects");
	const section3 = document.getElementById("contact");

	const options = {
		threshold: 0.1,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entrie => {
			if(entrie.target.id === "about" && entrie.isIntersecting){
				intersections.value.isSection1Intersecting = true;
			};
			if(entrie.target.id === "projects" && entrie.isIntersecting){
				intersections.value.isSection2Intersecting = true;
			};
			if(entrie.target.id === "contact" && entrie.isIntersecting){
				intersections.value.isSection3Intersecting = true;
			};
		});
	}, options);

	observer.observe(section1);
	observer.observe(section2);
	observer.observe(section3);
});

</script>

<template>
	<HeroSection id="home"></HeroSection>

	<Section1 id="about"></Section1>

	<Section2 id="projects"></Section2>

	<Section3 id="contact"></Section3>

</template>

<style setup>
</style>
