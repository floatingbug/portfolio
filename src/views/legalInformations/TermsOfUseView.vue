<script setup>
</script>


<template>    
	<div class="terms-of-use">
		<h1>
			Terms of Use
		</h1>
		
		<h3>
			Introduction
		</h3>
		
		<div class="text-container">
			<p>
				Welcome to myMovielist! This website allows users to create a personal list of movies. By using our website, you accept these Terms of Use.
			</p>

			<p>
				1. Account Creation and Responsibility To use the website, you must create an account, which requires your name, email address, and a password. You are responsible for keeping your password confidential and for protecting access to your account.
			</p>

			<p>
				2. Use of the Website The use of this website is for private, non-commercial purposes only. It is prohibited to use the website for illegal or unauthorized purposes. You agree not to upload or store any unlawful or offensive content through the website.
			</p>

			<p>
				3. Intellectual Property All content provided by us, including logos, text, graphics, and designs, is protected by copyright and may not be copied, distributed, or modified without permission.
			</p>

			<p>
				4. Limitation of Liability We assume no responsibility for the accuracy, completeness, or timeliness of the content provided on the website. The use of the website is at your own risk.
			</p>

			<p>
				5. Changes to the Terms of Use We reserve the right to change these Terms of Use at any time. Changes will be posted on this page and will take effect upon publication.
			</p>
		</div>
	</div>
</template>   


<style scoped>
.terms-of-use {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	padding: 8rem 2rem;
}

h1 {
	padding-bottom: 2rem;
}

h3 {
	padding: 1rem 0;
}

.text-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;

	:first-child {
		padding-bottom: 1rem;
	}
}
</style>
