import PrivacyPolicyView from "../PrivacyPolicyView.vue";
import TermsOfUseView from "../TermsOfUseView.vue";


const legalInformationRoutes = [
	{
		path: "/privacy-policy",
		name: "privacyPolicy",
		component: PrivacyPolicyView
	},
	{
		path: "/terms-of-use",
		name: "termsOfUse",
		component: TermsOfUseView
	}
];


export default legalInformationRoutes;
