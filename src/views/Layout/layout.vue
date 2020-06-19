<template>
  <div class='layout'>
    <div class='fix-header' id="boxFixed" ref='ele' :class="{'is_fixed' : isFixed}">
      <div class='header'>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size='55'></el-avatar>
        <div class='typeCon'>
          <div class='type' @click="close"><i class='el-icon-unlock'></i></div>
          <el-dropdown @command="handleCommand" class='type' trigger='click' placement='top'>
            <span class="el-dropdown-link">{{language}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">中文</el-dropdown-item>
              <el-dropdown-item command="en">英文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown @command="handleCommand" class='type' trigger='click' placement='top'>
            <span class="el-dropdown-link">
                                                          
                                                                                 <i class='el-icon-message
                                                                                                            '></i>
                                                                                  </span>
            <el-dropdown-menu slot="dropdown">
              <p style='padding:0 0 10px 10px;border-bottom:solid 1px #e8e9ec;color:#ffa940;font-size:17px'>你有2条消息
                <i class='el-icon-message-solid
                                              '></i>
              </p>
              <el-dropdown-item command="" class='dropdown-item'>
                <div class='MesCon'>
                  <div class='messagejk'>
                    <span class='titleMes'>今日无预览</span>
                    <div class='titleCon'>
                      <i class='el-icon-time'></i>
                      <span>4天前</span>
                    </div>
                  </div>
                  <b style='padding-left:2px;'>你有一个考试需要留意</b>
                </div>
              </el-dropdown-item>
              <el-dropdown-item command="" class='dropdown-item'>
                <div class='MesCon'>
                  <div class='messagejk'>
                    <span class='titleMes'>待办事项需处理</span>
                    <div class='titleCon'>
                      <i class='el-icon-time'></i>
                      <span>5天前</span>
                    </div>
                  </div>
                  <b style='padding-left:2px;'>你有一个培训需要留意</b>
                </div>
              </el-dropdown-item>
              <p class='lookall'>查看所有消息</p>
            </el-dropdown-menu>
          </el-dropdown>
          <div class='type' @click="open"><i class='el-icon-switch-button'></i></div>
        </div>
      </div>
      <div class='TabCon'>
        <div class='TabChoose'>
          <router-link to='/'>
            <div class='tab'>
              <i class='el-icon-goods'></i><span>{{$t('m.homepage')}}</span>
            </div>
          </router-link>
          <router-link to='/exam'>
            <div class='tab'>
              <i class='el-icon-user'></i><span>{{$t('m.exam')}}</span>
            </div>
          </router-link>
          <router-link to='/system'>
            <div class='tab'>
              <i class='el-icon-help'></i><span>{{$t('m.system')}}</span>
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
        locale: 'zh',
        isFixed: false,
        offsetTop: 0,
        language: 'zh',
        navData: [{
            title: this.$t('m.homepage'),
            src: "/",
            icon: 'el-icon-goods'
          },
          {
            title: this.$t('m.exam'),
            src: "/exam",
            icon: 'el-icon-user'
          },
          {
            title: this.$t('m.system'),
            src: "/system",
            icon: 'el-icon-help'
          }
        ]
      }
    },
    computed: {},
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
      //下拉菜单选中
      handleCommand(temp) {
        if (temp == 'en') {
          this.$i18n.locale = 'en';
          this.language = this.$i18n.locale
          console.log(this.$i18n.locale)
        } else {
          this.$i18n.locale = 'zh';
          this.language = this.$i18n.locale
          console.log(this.$i18n.locale)
        }
        // localStorage.language = temp;
        // console.log(this.$i18n.locale)
        // this.$i18n.locale = 'zh',
        //   localStorage.setItem('lang', 'zh')
        // console.log(this.$i18n.locale)
        // this.$message('click on item ' + command);
      },
      //注销
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '确定要注销吗? '),
            h('i', {
              style: 'color: teal'
            }, )
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '正在执行...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: '已注销: ' + action
          });
        });
      },
      //锁屏
      close() {
        this.$confirm('锁屏后需重新登录，确定要锁屏吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '锁屏成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消锁屏'
          });
        });
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
  .dropdown-item {
    padding: 0;
  }
  .dropdown-item:not(:last-child) {
    border-bottom: solid 1px #e8e9ec;
  }
  .MesCon {
    padding: 0 10px 0 10px;
  }
  .lookall {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    font-size: 13px;
    cursor: pointer;
  }
  .messagejk {
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
    .titleMes {
      font-weight: bold;
      font-size: 16px;
    }
    .titleCon {
      color: #a1a0ae;
      font-size: 11px;
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
