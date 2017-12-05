<template>
    <div id="me_config">
        <div>
            <mt-cell title="头像" to="//github.com" is-link value=""><img class="me-config-img" src="./img/name-img.jpg" ></mt-cell>
            <mt-cell title="姓名" to="//github.com" is-link value="张大大"></mt-cell>
            <mt-cell title="昵称" to="//github.com" is-link value="静雅居士"></mt-cell>
        </div>
        <div>
            <mt-cell title="性别" to="//github.com" is-link value="男"></mt-cell>
            <mt-cell title="出生年月" to="//github.com" is-link value="1988.12.12"></mt-cell>
        </div>
          <mt-button type="primary">保存</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {

    }
  };
</script>
<style scoped lang="less">
  @import url("../../base/css/config-style.less");
  #me_config{
    position: absolute;
    top: .88rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: @bodyBg;
    >button{
      width: 94%;
      margin: .3rem 3%;
      background: @scanConfigBtnBg;
    }
    >div{
      margin-top: .3rem;
      .me-config-img{
        width: 1.1rem;
        margin: .2rem 0;
      }
      >:nth-of-type(n+1){
        border-bottom: .01rem solid @meMenuBarBd;
      }
    }
  }

</style>
