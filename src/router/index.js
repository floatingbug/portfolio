import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "../views/home/router/index.js";
import legalInformationRoutes from "../views/legalInformations/router/index.js";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...homeRoutes,
		...legalInformationRoutes,
	]

});

export default router;
