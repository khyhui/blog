<template>
    <div class="friend">
        <h1>我的朋友</h1>
        <el-row>
            <el-col :span="12" class="tf-item">
                <a href="http://www.baidu.com" target="_blank">
                    <img src="../assets/img/tou.jpg">
                    <h4>百度</h4>
                    <p>这个就是百度啊</p>
                </a>
            </el-col>
            <el-col :span="12" class="tf-item">
                <a href="http://www.baidu.com" target="_blank">
                    <img src="../assets/img/tou.jpg">
                    <h4>百度</h4>
                    <p>这个就是百度啊</p>
                </a>
            </el-col>
            <el-col :span="12" class="tf-item">
                <a href="http://www.baidu.com" target="_blank">
                    <img src="../assets/img/tou.jpg">
                    <h4>百度</h4>
                    <p>这个就是百度啊</p>
                </a>
            </el-col>
            <el-col :span="12" class="tf-item">
                <a href="http://www.baidu.com" target="_blank">
                    <img src="../assets/img/tou.jpg">
                    <h4>百度</h4>
                    <p>这个就是百度啊</p>
                </a>
            </el-col>
            <el-col :span="12" class="tf-item">
                <a href="http://www.baidu.com" target="_blank">
                    <img src="../assets/img/tou.jpg">
                    <h4>百度</h4>
                    <p>这个就是百度啊</p>
                </a>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{

        },
        components:{}
    }
</script>
<style lang="less">
    .friend{
        background-color:#fff;
        padding:15px;
        border-radius: 5px;
        margin-bottom: 40px;
        h1{
            padding:15px 0;
            font-size: 25px;
            font-weight: bold;
        }
        .tf-item{
            transition: all 0.3s ease-out;
            border-radius: 5px;
            position: relative;
            a{
                display: block;
                padding:0 10px 0 90px;
                height:90px;
                color:#000;
                img{
                    width:60px;
                    height:60px;
                    border-radius: 50%;
                    position: absolute;
                    top:15px;
                    left:15px;
                    cursor: pointer;
                    object-fit: cover;
                }
                h4{
                    cursor: pointer;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 20px;
                    padding-top:15px;
                    font-weight: bold;
                }
                p{
                    margin:10px 0;
                    font-size: 12px;
                    line-height: 24px;
                    color:#999;
                    cursor: pointer;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
        .tf-item:hover{
            background: rgba(230,244,250,.5);
        }

    }
</style>