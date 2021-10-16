<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hi world</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Primary</button>
    <button @click="goToDaybook" class="btn btn-info">Primary</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>