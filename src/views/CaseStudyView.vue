<script setup>
import CaseStudyHero from '../components/case-study/CaseStudyHero.vue'
import CaseStudyToc from '../components/case-study/CaseStudyToc.vue'
import ProjectContextSection from '../components/case-study/sections/ProjectContextSection.vue'
import ContributionSection from '../components/case-study/sections/ContributionSection.vue'
import WalkthroughSection from '../components/case-study/sections/WalkthroughSection.vue'
import DecisionsSection from '../components/case-study/sections/DecisionsSection.vue'
import OutcomeSection from '../components/case-study/sections/OutcomeSection.vue'
</script>

<template>
  <main id="main" class="case-study" tabindex="-1">
    <CaseStudyHero />

    <div class="case-study-layout section-wrap">
      <aside class="case-study-aside">
        <CaseStudyToc />
      </aside>

      <div class="case-study-content">
        <ProjectContextSection />
        <ContributionSection />
        <WalkthroughSection />
        <DecisionsSection />
        <OutcomeSection />
      </div>
    </div>
  </main>
</template>
