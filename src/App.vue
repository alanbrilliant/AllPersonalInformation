<template>
  
<div id="app">
        <HereMap
            appId="NlnjIv910HhOC5VoJ1dN"
            appCode="yQ2-iQULjNTcYuXds-AfIA"
            lat="37.7397"
            lng="-121.4252"
            width="100%"
            height="835px" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
</div>
    
</template>

<script>
    import HereMap from "./components/HereMap.vue"
    import Home from "./views/Home.vue"

    export default {
        name: 'app',
        components: {
            HereMap,
            Home
        }
    }
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
