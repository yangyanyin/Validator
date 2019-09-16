<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="input-form">
      <h3>表单验证组件</h3>
      <ul>
        <li>
          <strong>电话 : </strong>
          <input type="tel" v-model="validatorData.tel.text" />
          <p v-if="validatorData.tel.error">{{validatorData.tel.error}}</p>
        </li>
        <li>
          <strong>邮箱 : </strong>
          <input type="email" v-model="validatorData.email.text" />
          <p v-if="validatorData.email.error">{{validatorData.email.error}}</p>
        </li>
        <li>
          <strong>密码 : </strong>
          <input type="password" v-model="validatorData.password.text" />
          <p v-if="validatorData.password.error">{{validatorData.password.error}}</p>
        </li>
      </ul>
      <a class="btn green" href="javascript:;" @click="formSubmit">提交</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      validatorData: {
        tel: {
          text: '',
          required: true,
          number: true
        },
        email: {
          text: '',
          required: true
        },
        password: {
          text: '',
          required: true,
          length: 6
        }
      }
    }
  },
  methods: {
    formSubmit () {
      this.$validate(this.validatorData).then(() => {
        alert('提交成功')
      }).catch(() => {
        console.log('提交失败')
      })
    }
  }
}
</script>
<style lang="less" scoped>
ul {
  display: block;
  margin: auto;
  width: 300px;
  padding: 20px 0;
  background: #fbfbfb;
  box-shadow: 0 0 4px #a9a9a9;
  li {
    padding: 10px 0;
    input {
      height: 24px;
      line-height: 24px;
      padding: 0 5px;
    }
    p {
      margin: 0;
      text-align: left;
      padding-left: 80px;
      padding-top: 5px;
    }
  }
}

.btn {
  margin-top: 20px
}
</style>
