<script setup>

</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li><a href="">用户名</a></li>
        <li><a href="">退出登录</a></li>
        <li><a href="">我的订单</a></li>
        <li><a href="">会员中心</a></li>
      </ul>
    </div>
  </nav>
</template>



<style lang="scss" scoped>
.app-topnav {
  background-color: #333;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: white;
        line-height: 1;

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }

      }
    }
  }
}
</style>
