<template>
  <div class="btn-nav">
    <a class="btn red" href="javascript:;" @click="clickDialog(1)">Modal1</a>
    <a class="btn orange" href="javascript:;" @click="clickDialog(2)">Modal2</a>
    <a class="btn blue" href="javascript:;" @click="clickDialog(3)">Modal3</a>
    <a class="btn green" href="javascript:;" @click="clickDialog(4)">Modal4</a>
  </div>
</template>
<script>
export default {
  methods: {
    clickDialog (type) {
      let options = {}
      if (type === 1) {
        options = {
          type: 'delete',
          title: '这里是标题',
          message: '代码是写出来给人看的，附带能在机器上运行',
          cancelButtonText: '关闭',
          confirmButtonText: '确认'
        }
      }
      if (type === 2) {
        options = {
          type: 'success',
          message: '代码是写出来给人看的，附带能在机器上运行',
          cancelButtonText: '关闭'
        }
      }
      if (type === 3) {
        options = {
          type: 'error',
          title: '这里是标题',
          message: '代码是写出来给人看的，附带能在机器上运行',
          cancelButtonText: '关闭',
          confirmButtonText: '确认'
        }
      }
      if (type === 4) {
        options = {
          type: 'warning',
          message: '代码是写出来给人看的，附带能在机器上运行',
          cancelButtonText: '关闭',
        }
      }
      this.$Dialogs(options).then(e => {
        console.log('点击了确认')
      }).catch(e => {
        console.log('点击了关闭')
      })
    }
  }
}
</script>
<style scoped lang="less">
a {
  display: inline-block;
  margin: 0 20px;
}

</style>
