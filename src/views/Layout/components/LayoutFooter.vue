<script setup>
import { ref, onMounted } from 'vue';
import LayoutShow from './LayoutShow.vue';
const currentTime = ref('');
onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleString();
  }, 1000)
})
</script>

<template>
  <div class="show">
    <div class="container">
      <LayoutShow title="客服服务">
        <div class="showData">
          <img src="https://blog.frium.top/upload/7b914c84-b6ec-4406-8d8b-976eee71e502.png" alt="">
          <img src="https://blog.frium.top/upload/7b914c84-b6ec-4406-8d8b-976eee71e502.png" alt="">
        </div>
      </LayoutShow>
      <LayoutShow title="关于我们">
        <div class="showData">
          <img src="https://blog.frium.top/upload/7b914c84-b6ec-4406-8d8b-976eee71e502.png" alt="">
          <img src="https://blog.frium.top/upload/7b914c84-b6ec-4406-8d8b-976eee71e502.png" alt="">
        </div>
      </LayoutShow>
      <LayoutShow title="下载app">
        <div class="showData">
          <img src="https://blog.frium.top/upload/7b914c84-b6ec-4406-8d8b-976eee71e502.png" alt="">
          <img src="https://blog.frium.top/upload/7b914c84-b6ec-4406-8d8b-976eee71e502.png" alt="">
        </div>
      </LayoutShow>
      <LayoutShow title="服务热线">
        <ul>
          <li>114514</li>
          <li>{{ currentTime }}</li>
        </ul>

      </LayoutShow>
    </div>
  </div>
  <div class="extra">
    <div class="container">
      <div class="slogan">
        <ul>
          <li>你说的对</li>
          <li>对你说的</li>
          <li>说的对你</li>
        </ul>
      </div>
      <hr>
      <div class="copyright">
        <ul>
          <li> <a href="">关于我们</a></li>
          <li> <a href="">帮助中心</a></li>
          <li> <a href="">售后服务</a></li>
          <li> <a href="">配送与验收</a></li>
          <li> <a href="">商务合作</a></li>
          <li> <a href="">搜索推荐</a></li>
          <li> <a href="">友情链接</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show {
  margin-top: 10px;

  .container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .showData {
      display: flex;
      justify-content: space-between;
    }

    img {
      width: 40%;
      height: 40%;
      margin: 10% 5%;

    }

    ul {
      margin-top: 20px;

      li {
        text-align: center;
        color: rgb(97, 118, 155);
        margin: 20px;
      }

      li:nth-child(1) {
        font-size: 28px;
      }

      li:nth-child(2) {
        font-size: 23px;
      }
    }
  }

}

.extra {
  background: #333;


  .slogan {
    ul {
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li {
      color: white;
      font-size: 25px;
      padding: 0 100px;

      ~li {
        border-left: 0px solid #666;
      }
    }

  }

  .copyright {
    ul {
      display: flex;
      height: 150px;
      justify-content: center;
      align-items: center;
    }

    li {
      a {
        color: gray;
        padding: 0 10px;
      }

      ~li {
        a {
          border-left: 2px solid gray;
        }
      }
    }


  }

  hr {
    border: none;
    height: 2px;
    background-color: #413c3c;
  }
}
</style>
