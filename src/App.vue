<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$container-width: 1152px;
$columns: 12;
$gap: 12px;
$column-width: ($container-width / $columns) - $gap;

.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-gap: $gap;

  margin-right: auto;
  margin-left: auto;
  max-width: $container-width;
  // width: 1152px;
  height: inherit;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 !important;
  padding: 0 !important;
}

h1 {
  margin: 0 !important;
}

.is-quarter {
  grid-column: span 4;
}

.is-half {
  grid-column: span 6;
}

.is-pulled-right {
  grid-column-start: 6;
  grid-column-end: 12;
}

.icon--inline {
  width: 32px;
  height: 32px;
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
