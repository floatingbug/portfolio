<script setup>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';

</script>


<template>
	<div class="section-3-content">
		<div class="top">
			<h1>Contact</h1>
		</div>

		<div class="mid">
			<div class="top">
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-user"></i>
					</InputGroupAddon>
				
					<FloatLabel>
						<InputText id="name"></InputText>
						<label for="name">Name</label>
					</FloatLabel>
				</InputGroup>

				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-envelope"></i>
					</InputGroupAddon>
				
					<FloatLabel>
						<InputText id="email"></InputText>
						<label for="email">E-Mail</label>
					</FloatLabel>
				</InputGroup>
			</div>
			
			<div class="bottom">
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-book"></i>
					</InputGroupAddon>
				
					<Textarea></Textarea>
				</InputGroup>

				<Button label="Send Message"></Button>
			</div>
		</div>
	</div>
</template>


<style scoped>
.section-3-content {
	width: 50%;
	min-width: 280px;
	border-radius: var(--border-radius-rounded-soft);
	padding: 1rem;
	background-color: var(--card-bg);
}

.top {
	display: flex;
	justify-content: center;
}

.mid {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}

.mid .top, .bottom {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.mid .top {
	gap: 2rem;
}

.mid .bottom {
	flex-direction: column;
	gap: 2rem;
}

.mid .top .p-inputgroup {
	flex: 1;
	min-width: 280px;
}

.mid .bottom .p-inputgroup {
	min-width: 280px;
}

.p-textarea {
	width: 100%;
	resize: none;
}
</style>
