<script setup>
defineProps({
  label: { type: String, default: 'Hinweis' },
})
</script>

<template>
  <aside class="case-study-callout">
    <span class="case-study-callout-label">{{ label }}</span>
    <div class="case-study-callout-body">
      <slot />
    </div>
  </aside>
</template>
