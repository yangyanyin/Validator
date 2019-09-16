<template>
  <div class="pat-dialog">
    <div class="pat-dialog-center">
      <span class="pat-icon" :class="'pat-'+type" v-if="type"></span>
      <h3 v-if="title">{{title}}</h3>
      <p v-if="message">{{message}}</p>
      <div class="pat-btns" v-if="cancelButtonText || confirmButtonText">
        <a class="pat-cancel" @click="closeDialog('close')" v-if="cancelButtonText">{{cancelButtonText}}</a>
        <a class="pat-confirm" @click="closeDialog('confirm')" v-if="confirmButtonText">{{confirmButtonText}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PuiDialog',
  data () {
    return {
      type: '',
      title: '',
      message: '',
      confirmButtonText: '',
      cancelButtonText: ''
    }
  },
  methods: {
    closeDialog(type) {
      // 点击确认或者关闭
      this.$Dialogs.close(type)
    }
  }
}
</script>
<style lang="less" scoped>
.pat-dialog {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  text-align: center;
}
.pat-dialog-center {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  max-width: 500px;
  width: calc(90% - 20px);
  padding: 20px 10px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  .pat-icon {
    display: block;
    margin: auto;
    width: 60px;
    height: 60px;
    &.pat-delete {
      background: url('./img/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left bottom;
    }
    &.pat-success {
      background: url('./img/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left -77px;
    }
    &.pat-error {
      background: url('./img/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left -153px;
    }
    &.pat-warning {
      background: url('./img/pop-prompt.png') no-repeat;
      background-size: 60px;
      background-position: left top;
    }

    
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
    padding: 15px 0;
  }
  p {
    font-size: 14px;
  }
  .pat-btns {
    font-size: 0;
    padding-top: 15px;
    a {
      display: inline-block;
      margin: 0 10px;
      height: 32px;
      width: 120px;
      border-radius: 5px;
      line-height: 32px;
      font-size: 14px;
      cursor:pointer;
      &.pat-cancel {
        border: 1px solid #444;
      }
      &.pat-confirm {
        border: 1px solid #f1435a;
        background: #f1435a;
        color: #fff;
      }
    }
  }
}
</style>
