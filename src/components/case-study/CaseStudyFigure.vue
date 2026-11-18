<script setup>
defineProps({
  image: { type: Object, required: true },
  narrow: { type: Boolean, default: false },
  priority: { type: Boolean, default: false },
})
</script>

<template>
  <figure class="case-study-figure" :class="{ 'case-study-figure-narrow': narrow }">
    <div class="case-study-figure-frame">
      <img
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        :loading="priority ? 'eager' : 'lazy'"
        :fetchpriority="priority ? 'high' : 'auto'"
        decoding="async"
      />
    </div>
    <figcaption>{{ image.caption }}</figcaption>
  </figure>
</template>
