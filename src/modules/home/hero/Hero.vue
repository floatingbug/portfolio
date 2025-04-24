<script setup>
import device from "@/composables/device.js";

</script>


<template>    
	<div class="hero-container">
		<div class="hero-main">
			<div class="hero-image">
				<div class="image-container">
					<img src="/public/img/developer.svg" alt="">
					<div class="image-frame"></div>
				</div>
			</div>
		
			<div class="hero-main-head">
				<p class="hero-intro">Thomas Hof</p>
				<h1 class="hero-title">Full Stack Web Developer</h1>
				<p class="hero-description">
					Hi, I'm a self-taught web developer from Germany, creating web applications with passion.
				</p>
				<div class="hero-main-social-links">
					<Button
						as="a" 
						href="https://github.com/floatingbug"
						target="_blank"
						variant="text"
					>
						<i class="pi pi-github" style="color: var(--color-contrast); font-size: 1.2rem;"></i>
					</Button>
					
					<Button
						as="a" 
						href="https://www.linkedin.com/in/thomas-hof-a9a40a317/"
						target="_blank"
						variant="text"
					>
						<i class="pi pi-linkedin" style="color: var(--color-contrast); font-size: 1.2rem;"></i>
					</Button>
					
					<Button
						as="a" 
						href="https://www.facebook.com/profile.php?id=61572414130134"
						target="_blank"
						variant="text"
					>
						<i class="pi pi-facebook" style="color: var(--color-contrast); font-size: 1.2rem;"></i>
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.hero-container {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--hero-bg-color);
}

.hero-main {
	width: 90%;
	max-width: 1200px;
	display: flex;
	flex-direction: column;
}

.hero-main-head {
	display: flex;
	flex-direction: column;
	margin-top: 10%;

	.hero-intro {
		color: var(--color-contrast);
	}

	.hero-title {
		margin-top: 1rem;;
	}

	.hero-description {
		max-width: 300px;
		margin-top: 1rem;
	}

	.hero-main-social-links {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;

		.p-button {
			text-decoration: none;
		}
	}
}

.hero-image {
	display: flex;
	justify-content: center;

	.image-container {
		width: 90%;
		position: relative;
		z-index: 2;
	}

	img {
		width: 100%;
		position: relative;
		z-index: 1;
	}

	.image-frame {
		width: 80%;
		height: 80%;
		position: absolute;
		top: 15%;
		left: 15%;
		right: 0;
		bottom: 0;
		z-index: 0;
		border-radius: var(--border-radius-rounded-soft);
		border: 4px solid var(--color-contrast);
	}
}

@media(min-width: 480px) {
	.hero-main-head {
		.hero-intro {
			font-size: 1.2rem;
		}

		.hero-title {
			font-size: 3rem;
		}

		.hero-description {
			font-size: 1.2rem;
		}
	}
}

@media(min-width: 1024px) {
	.hero-main {
		flex-direction: row-reverse;
		align-items: center;
		gap: 2rem;
	}

	.hero-main-head {
		margin: 0;
		
		.hero-title {
		}
	}
}

@media(min-width: 1360px) {
	.hero-main-head {
		.hero-intro {
		}


		.hero-description {
		}
	}
}
</style>
