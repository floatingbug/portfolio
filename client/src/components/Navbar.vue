<script setup>

</script>

<template>
<nav>
  <div class="nav-left">
    <router-link to="/">About</router-link>
    <router-link to="/skills">Skills</router-link>
    <router-link to="/projects">Projects</router-link>
  </div>
  <div class="nav-right">
    <router-link to="/contact">contakt</router-link>
  </div>
</nav>
</template>

<style>
nav {
  background-color: LightGrey;
  font-size: 1.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
}

.nav-left {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  max-width: 400px;
}

.nav-right {
  font-size: 1rem;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 2vw;
}

a {
  text-decoration: none;
    color: black;
}
</style>
