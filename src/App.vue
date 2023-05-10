<template>
  <div>
      <div  >
        <div v-if="!$route.meta.showNav"  id="nav"  >
          <a  class="nava" ><router-link to="/">首页</router-link></a>
          <a class="nava"><router-link to="/info">新闻资讯</router-link></a>
          <a  class="nava" ><router-link to="/project">产业项目</router-link></a>
          <a  class="nava"><router-link to="/problem">问题反馈</router-link></a>
          <a  class="nava" style="position: absolute; right: 0px;"><router-link to="/user">个人中心</router-link></a>
          <a  style="position: absolute;right: 40px;">
            <router-link to="/login">登录</router-link>
          </a>
          
        </div>
        <router-view/>
      </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">

#nav {
  background-color: #cc0000;
  text-align: center;
  position: relative;
  height: 60px;
  
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration-line: none;
    margin-top: 20px;

    
    

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
.nava{
  padding-right: 100px;
  display: inline-block;
  //position: absolute;
  //top:20px
}

</style>
