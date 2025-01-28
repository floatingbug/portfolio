<script setup>
import { ref } from "vue";
import Menu from "primevue/menu";
import {useTranslations} from "@/composables/useTranslations.js";


const {setTranslation} = useTranslations();
const menu = ref();


const items = ref([
    {
        label: 'Choose your language',
        items: [
            {
                label: 'English',
                command: () => {
                    setTranslation("en")
                    localStorage.setItem("lang", "en");
                }
            },
            {
                label: 'German',
                command: () => {
                    setTranslation("de")
                    localStorage.setItem("lang", "de");
                }
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>


<template>
    <Button type="button" icon="pi pi-language" severity="contrast" variant="outlined" size="small" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
</template>


<style scoped>

</style>
