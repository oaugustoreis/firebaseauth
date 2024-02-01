<script setup>
</script>
<template>
  <nav>
    <div class="flex flex-center full-weight">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/feed">Feed</router-link>
      <router-link to="/registration">Registration</router-link>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
