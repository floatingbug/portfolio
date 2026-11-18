<script setup>
defineProps({
  id: { type: String, required: true },
  index: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="case-study-section">
    <header class="case-study-section-head">
      <span class="case-study-section-index">{{ index }}</span>
      <h2>{{ title }}</h2>
    </header>
    <div class="case-study-section-body">
      <slot />
    </div>
  </section>
</template>
