<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import url('./assets/style/btn.css');
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  line-height: 1.42857143;
  color: #444;
  background-color: #fff;
  padding-bottom:0 !important;
  margin: 0;
  text-align: center;
  font-weight: 400;
}

ul,li,ol{padding: 0;margin: 0;list-style: none;}

a {
  text-decoration: none;
  color: #444;
}
</style>
