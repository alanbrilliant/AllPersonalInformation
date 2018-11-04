<template>
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>


<ais-index
    app-id="NLJ7EG9SMB"
    api-key="a49fb07cc3c1c4a400fcbf24e4e320b1"
    index-name="Test"
  >
    <ais-search-box></ais-search-box>
    <ais-results>
      <template slot-scope="{ result }">
        <h2>
          <ais-highlight :result="result" attribute-name="name"></ais-highlight>
        </h2>
      </template>
    </ais-results>
  </ais-index>

</div>


</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
