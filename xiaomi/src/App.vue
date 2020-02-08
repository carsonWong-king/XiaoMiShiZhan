<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import axios from 'axios';
import jsonp from 'jsonp';
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      age:30,
      data:''
    }
  },
  mounted(){

    /* CORS跨域 */
    //let url = "https://www/easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list";
    /* axios.get(url).then(()=>{

    }) */

    /* 
      jsonp跨域(jsonp不是一个请求,它是一个js脚本,是正常访问一个接口),
      是不支持axios的
    */
    //let url = 'http://www.imooc.com/activity/servicetime';
    //jsonp是有三个参数的,第一个是url,第二个是option参数配置(没有可省略),第三个是回调函数
    /* jsonp(url,(err,res)=>{
      let result = res;
      this.data = result;
    }) */

    /* 
      接口代理(前端修改,后台不动),支持任何方式实现请求,比如axios,更受
      欢迎
    */
    let url = '/api/activity/servicetime';  //api是虚拟的
    //jsonp是有三个参数的,第一个是url,第二个是option参数配置(没有可省略),第三个是回调函数
    jsonp(url,(err,res)=>{  //第一个err参数是报错信息,第二个res是返回信息
      let result = res;
      this.data = result;
    })

    
    
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
