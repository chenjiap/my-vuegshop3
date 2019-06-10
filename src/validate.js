import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
//import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件
import zh_CN from 'vee-validate/dist/locale/zh_CN'

// 配置中文
//Validator.addLocale(zh);

// const config = {
//   locale: 'zh_CN'
// };

Vue.use(VeeValidate);

// 自定义validate 
// const dictionary = {
//    zh_CN: {
//       messages: {
//         name: () => '请输入正确的邮箱格式',
//         required: ( field )=> "请输入" + field
//       },
      
//       attributes:{
//         email:'邮箱',
//         code:'验证码',  
//         name: '用户名',
//         phone: '手机号'
//       }
//   }
// };

// 提示信息本地化
VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
      name: '用户名',
      phone: '手机号',
      code: '验证码',
      pwd: '密码',
      captcha:'图形验证码'
    }
  })

//Validator.updateDictionary(dictionary);

// Validator.extend('mobile', {
//   messages: {
//     zh_CN:field => field + '必须是11位手机号码',
//   },
//   validate: value => {
//     return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//   }
// });


// 自定义验证规则
VeeValidate.Validator.extend('mobile', {
    validate: value => {
      return /^1\d{10}$/.test(value)
    },
    getMessage: field => field + '必须是11位手机号码'
  })
  