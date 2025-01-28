<script setup>
import {onMounted} from "vue";
import {useTranslations} from "@/composables/useTranslations.js";
import {device} from "@/composables/device.js";
import HeroSectionLd from "./heroSectionLd/HeroSectionLd.vue";
import HeroSectionMd from "./heroSectionMd/HeroSectionMd.vue";
import HeroSectionSd from "./heroSectionSd/HeroSectionSd.vue";


const {translation} = useTranslations();


</script>

<template>
	<HeroSectionLd v-if="device.size === 'ld'" :translation="translation"></HeroSectionLd>
	<HeroSectionMd v-if="device.size === 'md'" :translation="translation"></HeroSectionMd>
	<HeroSectionSd v-if="device.size === 'sd'" :translation="translation"></HeroSectionSd>
</template>

<style scoped>
</style>
