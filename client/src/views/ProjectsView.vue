<script setup>

</script>

<template>
<section id="projects">
  <div class="container">
    <h2>Projects</h2>
    <div class="project-list">
      <div class="project">
        <h3>Project 1</h3>
        <p>Description of Project 1</p>
        <a href="link-to-project1" class="project-link" target="_blank">View Project</a>
      </div>
      <div class="project">
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
        <a href="link-to-project2" class="project-link" target="_blank">View Project</a>
      </div>
      <div class="project">
        <h3>Project 3</h3>
        <p>Description of Project 3</p>
        <a href="link-to-project3" class="project-link" target="_blank">View Project</a>
      </div>
      <!-- Weitere Projekte -->
    </div>
  </div>
</section>
</template>


<style>
/* Allgemeine Stile */

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.project {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
}

.project h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.project p {
  color: #555;
  margin-bottom: 10px;
}

.project-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #337ab7;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
}

.project-link:hover {
  background-color: #23527c;
}

#projects {
  padding: 50px 0;
}
</style>
