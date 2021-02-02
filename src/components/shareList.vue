<template>
    <div class="shareContent">
        <el-row>
            <el-col :span="24" class="s_item">
                <span class="s-date">
                    <span class="month" v-html="'8月'"></span>
                    <span class="day" v-html="'20'"></span>
                </span>
                <header>
                    <h1>
                        <a href="javascript:">mpvue 同时开发和打包成H5和微信小程序</a>
                    </h1>
                    <h2>
                        <i class="iconfont icon-wo"></i> 发表于
                        <i class="iconfont icon-shijian"></i><span v-html="'2018年09月25日'"></span> ●
                        <i class="iconfont icon-yanjing"></i> 985次观看 ●
                        <i class="iconfont icon-liaotian"></i> 60 条评论 ●
                        <i class="iconfont icon-aixin_shixin"></i> 900次点赞 ●
                        <i class="iconfont icon-star_full"></i> 20 次收藏 
                    </h2>
                    <div class="label">
                        <a href="javascript:">小程序</a>
                    </div>
                </header>
                <div class="article_content">
                    <p style="text-indent:2em;">
                        mpvue 同事打包成H5和微信小程序，真正实现开发一套代码，实现双端应用，主要需要注意相关的一些配置，开发速度杠杠滴，在后续维护和优化中，也可以只需要修改一套代码，方便极了
                        </p>
                    <p  style="max-height:300px;overflow:hidden;text-align:center;margin:10px 0;">
                        <img src="../assets/img/bg-content.jpg" alt="图片正在加载中...">
                    </p>
                </div>
                <div class="viewdetail">
                    <a href="javascript:">阅读全文>></a>
                </div>
            </el-col>
            <el-col :span="24" class="s_item">
                <span class="s-date">
                    <span class="month" v-html="'8月'"></span>
                    <span class="day" v-html="'20'"></span>
                </span>
                <header>
                    <h1>
                        <a href="javascript:">mpvue 同时开发和打包成H5和微信小程序</a>
                    </h1>
                    <h2>
                        <i class="iconfont icon-wo"></i> 发表于
                        <i class="iconfont icon-shijian"></i><span v-html="'2018年09月25日'"></span> ●
                        <i class="iconfont icon-yanjing"></i> 985次观看 ●
                        <i class="iconfont icon-liaotian"></i> 60 条评论 ●
                        <i class="iconfont icon-aixin_shixin"></i> 900次点赞 ●
                        <i class="iconfont icon-star_full"></i> 20 次收藏 
                    </h2>
                    <div class="label">
                        <a href="javascript:">小程序</a>
                    </div>
                </header>
                <div class="article_content">
                    <p style="text-indent:2em;">
                        mpvue 同事打包成H5和微信小程序，真正实现开发一套代码，实现双端应用，主要需要注意相关的一些配置，开发速度杠杠滴，在后续维护和优化中，也可以只需要修改一套代码，方便极了
                        </p>
                    <p  style="max-height:300px;overflow:hidden;text-align:center;margin:10px 0;">
                        <img src="../assets/img/bg-content.jpg" alt="图片正在加载中...">
                    </p>
                </div>
                <div class="viewdetail">
                    <a href="javascript:">阅读全文>></a>
                </div>
            </el-col>
            <el-col class="viewmore">
                <a  class="tcolors-bg" href="javascript:">点击加载更多</a>
            </el-col>
        </el-row>
    </div>
</template>
<script>

</script>
<style lang="less">
    .shareContent{
        .s_item{
            .s-date{
                    position: absolute;
                    top: -20px;
                    left: -35px;
                    height: 60px;
                    width: 70px;
                    padding-top: 10px;
                    border-radius: 100px;
                    color: #fff;
                    background: #97dffd;
                    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
                .month{
                    text-align: center;
                    display: block;
                }
                .day{
                    font-size: 30px;
                    font-weight: 700;
                    text-align: center;
                    display:block;
                }
            
            header{
                white-space: normal;
                word-break: break-all;
                h1{
                    margin: 10px 0;
                    font-size: 25px;
                    font-weight: 700;
                    text-align: center;
                    line-height: 30px;
                    a{
                        color: #444;
                        text-decoration: none;
                    }
                }
                h2{
                    margin: 10px 0;
                    line-height: 24px;
                    text-align: center;
                    color: #555;
                    font-size: 14px;
                    .iconfont{
                        width: 1.28571429em;
                        text-align: center;
                        display: inline-block;
                        font: normal normal normal 14px/1 FontAwesome;
                        font-size: inherit;
                        text-rendering: auto;
                        -webkit-font-smoothing: antialiased;
                    }
                }
                .label{
                    border-color: #97dffd;
                    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    background-color: #97dffd;
                    margin: 5px 0 15px 2px;
                    font-size: 14px;
                    position: relative;
                    left: -32px;
                    border-radius: 0 4px 4px 0;
                    padding: 7px 11.2px 7px 32px;
                    display: inline-block;
                    color: #fff;
                    a{
                        color: #fff;
                        line-height: 100%;
                        text-decoration: none;
                    }
                }
                .label::after{
                    position:absolute;
                    content:'';
                    top:100%;
                    left:0;
                    border-top:0 solid transparent;
                    border-right-width:1em;
                    border-right-color:#48456D;
                    border-right-style:solid;
                    border-bottom:1em solid transparent;
                    border-left:0 solid transparent;
                    width:0;
                    height:0;
                }
            .article_content{
                p{
                    margin: 10px 0;
                    line-height: 24px;
                }
            }
            }
            .viewdetail{
                margin: 10px 0;
                line-height: 24px;
                text-align: center;
                a{
                    color: #fff;
                    font-size: 12px;
                    padding: 5px 10px;
                    border-radius: 5px;
                    background: #97dffd;
                    transition: all 0.3s ease-in-out;
                    text-decoration: none;
                }
            }
        }
        .viewmore{
            width:100%;
            .tcolors-bg{
                display: inline-block;
                width:100%;
                border-radius: 5px;
                text-align: center;
                font-size: 14px;
                color: #fff;
                height: 30px;
                line-height: 30px;
                background: #97dffd;
            }
        }
    }
</style>