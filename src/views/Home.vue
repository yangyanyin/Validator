<template>
  <div class="home">
    <router-link to="/"><img alt="Vue logo" src="../assets/logo.png"></router-link>
    <div class="nav">
      <router-link to="validator">Validator (表单验证)</router-link>
      <router-link to="dialog">Dialog (弹窗)</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang="less" scoped>
.nav {
  display: block;
  margin-bottom: 30px;
  a {
    display: inline-block;
    margin: 0 10px;
    font-size: 16px;
    &.router-link-active {
      text-decoration: underline;
      color: #41b883;
    }
  }
}

</style>