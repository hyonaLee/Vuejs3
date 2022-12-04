<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding/stringdata">StringData</router-link> |
    <router-link to="/databinding/htmldata">HTMLData</router-link> |
    <router-link to="/databinding/inputdata">InputData</router-link> |
    <router-link to="/databinding/selectdata">SelectData</router-link> |
    <router-link to="/databinding/checkboxdata">CheckboxData</router-link> |
    <router-link to="/databinding/radiodata">RadioData</router-link> |
    <router-link to="/databinding/attributedata">AttributeData</router-link> |
    <router-link to="/databinding/fordata">v-forData</router-link> |
    <router-link to="/databinding/classdata">ClassData</router-link> |
    <router-link to="/databinding/styledata">StyleData</router-link> |
    <router-link to="/event/click">ClickEvent</router-link> |
    <router-link to="/event/change">ChangeEvent</router-link> |
    <router-link to="/event/key">KeyEvent</router-link> |
    <router-link to="/props">Props</router-link> |
    <router-link to="/vuex">Vuex</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
