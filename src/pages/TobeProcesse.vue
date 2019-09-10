<template>
    <div class="tobePro">
        <div class="car-content"  v-for="item in list" :key="item.id">
            <el-card class="box-card">
            <div slot="header" class="car-pay">
                <el-radio v-model="radio" label=""></el-radio>
                <div class="right-content">
                    <p>时间: {{ item.time }} </p>
                    <p>地点: {{ item.adr }}</p>
                    <p>违法: {{ item.illegal }}</p>
                    <p>罚款:{{ item.fine }}元</p>
                    <p>记分:{{ item.score }}分</p>
                </div>
            </div>
            <div class="listPrice">
                <div>共计:&yen;{{ item.total }}(含服务费￥20.00)</div>
                <div><a href="">查看详情</a> </div>
            </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        radio: '1',
        list: [
            {
                id: 1,
                time: '2019.09.09 13:46:23',
                adr: '汉渝路',
                illegal: '驾驶机动车',
                fine: 200,
                score: 6,
                total: 220
            },
            {
                id:2,
                time: '2019.09.09 13:46:23',
                adr: '汉渝路',
                illegal: '驾驶机动车',
                fine: 200,
                score: 6,
                total: 220
            }

        ]
      };
    }
};
</script>

<style lang="less" scoped>
    .tobePro{
        //卡片内容
        padding: 0 12px;
        .car-content{
            margin: 15px 0 20px 0;
            .box-card{
                .car-pay{
                    display: flex;
                    .right-content{
                        flex: 1;
                        p{
                            margin-bottom: 10px;
                        }
                    }
                }

                .listPrice{
                    display: flex;
                    justify-content: space-between;
                    div a{
                        text-decoration: none;
                    }
                }
            }
        }

        .el-radio{
            margin: 0;
        }
    }

</style>