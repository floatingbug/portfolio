<script setup>
import { Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <section class="contact-section section-wrap" id="contact">
    <div class="contact-card">
      <div class="eyebrow"><span class="section-index">04</span> KONTAKT</div>
      <h2>Gute Produkte entstehen<br /><span class="text-muted">gemeinsam.</span></h2>
      <p>
        Du suchst einen motivierten Entwickler für dein Team oder dein nächstes
        Webprojekt? Ich freue mich darauf, dich kennenzulernen.
      </p>
      <div class="contact-actions">
        <!-- TODO: Vor dem Veröffentlichen durch deine öffentliche Kontakt-E-Mail ersetzen. -->
        <a class="button button-primary" href="mailto:DEINE-EMAIL@example.com">
          E-Mail schreiben <Mail :size="16" />
        </a>
        <a
          class="button button-secondary"
          href="https://github.com/floatingbug"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Github :size="16" />
        </a>
      </div>
      <span class="contact-decoration">LET'S BUILD SOMETHING USEFUL.</span>
    </div>
  </section>
</template>
