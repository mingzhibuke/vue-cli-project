<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  created() {
    this.$router.push("/");
  }

}
</script>

<style>
html,
body {
  overflow-y: visible;
}
</style>
