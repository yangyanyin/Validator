// 导入组件
import Vue from 'vue'

// 特点的验证规格
let regex = {
  email: /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  number: /^[0-9]+.?[0-9]*/
}

// 验证方法
function verification(val) {
  for (let v in val) {

    // 必填
    if (val[v].required && val[v].text === '') {
      Vue.set(val[v], 'error', '此项为必填项')
      return false
    }

    // 限制长度
    if (val[v].length && val[v].text.length < val[v].length) {
      Vue.set(val[v], 'error', '请输出长度大于' + val[v].length)
      return false
    }

    // 邮箱
    if (v === 'email' && !regex['email'].test(val[v].text)) {
      Vue.set(val[v], 'error', '请输入正确的邮箱地址')
      return false
    }

    // 纯数字
    if (val[v].number && !regex['number'].test(val[v].text)) {
      Vue.set(val[v], 'error', '请输出纯数字')
      return false
    }

    // 自定义 根据传过来的正则
    if (val[v].regex && !val[v].regex.test(val[v].text)) {
      Vue.set(val[v], 'error', '请输出正确的')
      return false
    }
    Vue.set(val[v], 'error', false)
  }
  return true
}

const validates = (val) => {
  return new Promise((resolve, reject) => {
    if (verification(val)) {
      resolve()
    } else {
      reject(val)
    }
  })
}

// 默认导出组件
export default validates