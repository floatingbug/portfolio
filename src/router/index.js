import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "../modules/home/router/index.js";
import legalInformationRoutes from "../modules/legalInformations/router/index.js";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...homeRoutes,
		...legalInformationRoutes,
	]

});

export default router;
