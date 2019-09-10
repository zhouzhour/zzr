<template>
  <div id="box">
    <div class="boxTop">
      <div style="padding:10px">
        <span class="topFont">自助提醒功能</span>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>

      <!-- 卡片 -->
      <el-card class="box-card">
        <div slot="header" class="car-head">
          <div class="el-icon-warning-outline tip">警示消息</div>

          <div class="carInfo">
            <div class="leftImg"></div>
            <div class="rightInfo">
              <span>渝B2R702</span>
              <span class="changeCar">切换车辆 ▼</span>
              <div class="time">时间</div>
            </div>
          </div>
        </div>

        <div class="car-foot">
          <div>
            <h4>1</h4>
            <span>待处理</span>
          </div>
          <div>
            <b>&yen;200.00</b>
            <div class="fine">罚款</div>
            <span>
              <a href>查看处理规则</a>
            </span>
          </div>
          <div>
            <b>6</b>
            <div class="deduction">扣分</div>
            <span>
              <a href>查看余分</a>
            </span>
          </div>
        </div>
      </el-card>

      <!-- 路由跳转 -->

        <div class="route-change">
          <p>
            <router-link to="/" class="hande hande-default">待处理</router-link>
          </p>
          <p>
            <router-link to="/processing" class="hande">处理中</router-link>
          </p>
          <p>
            <router-link to="/processed" class="hande">已处理</router-link>
          </p>
        </div>

    </div>

    <!-- 路由出口 -->
    <div class="main">
      <!-- 设置出口 -->
      <router-view></router-view>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <h5>这是底部</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true //按钮开关
    };
  }
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
  background: url("../assets/imgs/box.png") no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;

  /* 上 */

  .boxTop {
    padding: 0 28px 0 12px;

    .topFont {
      color: #fff;
      margin-right: 10px;
    }
    /* 卡片 */
    .box-card {
      width: 100%;
      padding: 0 8px;
      .car-head {
        width: 100%;
        padding-top: 0px;
        .tip {
          width: 100%;
          color: red;
          text-align: center;
        }
        .carInfo {
          display: flex;
          align-items: center;

          .leftImg {
            width: 80px;
            height: 80px;
            border-radius: 100%;
            background-color: #ccc;
          }
          .rightInfo {
            flex: 1;
            margin-left: 10px;
            .changeCar {
              margin-left: 20px;
            }
            .time {
              margin-top: 10px;
            }
          }
        }
      }

      .car-foot {
        display: flex;
        justify-content: space-between;
        text-align: center;
        .fine,
        .deduction {
          margin: 5px 0;
        }
      }
    }
    /* 路由跳转 */

      .route-change {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;

        .hande {
          text-decoration: none;
          padding-bottom: 5px;
          &:hover {
            border-bottom: 2px solid rgb(83, 69, 240);
          }
        }

    }
  }

  //商品详情
  .main {
    flex: 1;
    height: 100%;
    overflow: auto;
  }

  /* 尾部 */
  .footer {
    flex: 0 0 50px;
    border: 1px solid #ccc;
    // position: fixed;
    // bottom: 0;
  }
}
</style>