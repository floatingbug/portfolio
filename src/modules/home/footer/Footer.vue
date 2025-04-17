<script setup>
</script>


<template>    
	<div class="footer">
		<div class="container-left">
			<div class="left">
				<div class="creator">
					© 2024 Thomas Hof.
				</div>
				<div class="contact">
					Kontakt: thomas.hof1984@gmail.com
				</div>
			</div>
			
			<div class="right">
				<div class="termsOfUse">
					<Button as="router-link" to="/terms-of-use" variant="link">Terms of Use</Button>
				</div>
			
				<div class="privacyPolicy">
					<Button as="router-link" to="/privacy-policy" variant="link">Privacy Policy</Button>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.footer {
	width: 100%;
	min-width: 280px;
	height: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}

.container-left {
	display: flex;
	align-items: center;
	gap: 3rem;
	flex-wrap: wrap;

	.left, .right {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.right {
		a {
			padding: 0;
		}
	}
}
</style>
