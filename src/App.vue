<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar>
    <template #logo>
      <h4>MyPortfolio</h4>
    </template>
  </NavBar>

  <RouterView />
</template>

<style>
/* Since the navbar is fixed/transparent, your page content needs */
/* a dark background or hero image at the top to make the text readable */
body {
  background-color: #222;
  color: white;
}
</style>