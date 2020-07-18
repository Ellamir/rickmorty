<template>
  <div id="app">
    <navegacion></navegacion>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import Footer from './components/Footer.vue';
import { conexApi } from "./config/apiconfig"
export default {
  name: 'App',
  components: { 
    Navegacion,
    Footer 
  },
  mounted() {
    conexApi();
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
