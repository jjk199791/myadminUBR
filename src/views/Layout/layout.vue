<template>
  <div class='layout'>
    <div class='fix-header' id="boxFixed" ref='ele' :class="{'is_fixed' : isFixed}">
      <div class='header'>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size='55'></el-avatar>
        <div class='typeCon'>
          <div class='type'><i class='el-icon-goods'></i></div>
          <el-dropdown @command="handleCommand" class='type'>
            <span class="el-dropdown-link">
                            En
                            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="中文">中文</el-dropdown-item>
              <el-dropdown-item command="英文">英文</el-dropdown-item>
              <el-dropdown-item command="韩文" disabled>韩文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class='type'><i class='el-icon-message
                           '></i></div>
          <el-dropdown @command="handleCommand" class='type'>
            <span class="el-dropdown-link">
                            En
                            </span>
            <el-dropdown-menu slot="dropdown">
              <p>你有4条消息</p>
              <el-dropdown-item command="">第一条消息</el-dropdown-item>
              <el-dropdown-item command="">第一条消息</el-dropdown-item>
            
            </el-dropdown-menu>
          </el-dropdown>
          <div class='type'><i class='el-icon-edit-outline
                                                    '></i></div>
        </div>
      </div>
      <div class='TabCon'>
        <div class='TabChoose'>
          <router-link :to="item.src" v-for="(item,index) in navData" :key="index">
            <div class='tab'>
              <i :class='item.icon'></i> {{item.title}}
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import eventBus from '@/assets/bus.js'
  export default {
    data() {
      return {
        isFixed: false,
        offsetTop: 0,
        navData: [{
            title: "门户",
            src: "/",
            icon: 'el-icon-goods'
          },
          {
            title: "培训考试",
            src: "/exam",
            icon: 'el-icon-user'
          },
          {
            title: "系统管理",
            src: "/system",
            icon: 'el-icon-help'
          }
        ]
      }
    },
    // created() {
    //   // var heightStyle = this.$refs.ele.style.height;
    //   var heightCss = window.getComputedStyle(this.$refs.ele).height;
    //   console.log(heightCss)
    //   eventBus.$emit('headheight', this.heightCss)
    // },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.$nextTick(() => {
        console.log('222')
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
        console.log(this.offsetTop)
      })
      var heightCss = window.getComputedStyle(this.$refs.ele).height;
      console.log(heightCss)
      eventBus.$emit('headheight', heightCss)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      initHeight() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  };
</script>
<style lang='scss' scoped>
  .layout {
    width: 100%;
    height: 100%;
    .fix-header {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      z-index: 999;
    }
  }
  .is_fixed {
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .header {
    display: flex;
    padding: 10px 30px;
    justify-content: space-between;
    background: #d8ebff;
    .typeCon {
      display: flex;
      align-items: center;
      .type {
        width: 25px;
        height: 25px;
        line-height: 25px;
        cursor: pointer;
        display: inline-block;
        border-radius: 50%;
        background: #1989fa;
        color: white;
        font-size: 15px;
        text-align: center;
        margin-left: 20px;
      }
    }
  }
  .TabCon {
    background: white;
    padding: 10px 20px;
    .TabChoose {
      display: flex;
      align-items: center;
    }
    .tab {
      display: inline-block;
      padding: 5px 20px;
      border-radius: 28px;
    }
  }
  a {
    color: #2c3e50;
    text-decoraction: none;
    font-weight: bold;
    margin-left: 10px;
    &.router-link-exact-active {
      color: #fff;
      background: #1989fa;
      padding: 5px;
      border-radius: 25px;
    }
    &:not(:first-child) {
      margin-left: 40px;
    }
  }
</style>
