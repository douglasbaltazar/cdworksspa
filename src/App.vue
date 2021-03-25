<template>
  <div id="app">
    <main>
      <NavMain />
    <router-view />
    </main>
    <FooterMain />
  </div>
</template>

<script>
import NavMain from "@/components/NavMain.vue"
import FooterMain from "@/components/FooterMain.vue"

export default {
  components: {
    NavMain,
    FooterMain
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  min-height: calc(100vh - 100px);
  margin-bottom: 35px;
}
</style>
