<template>
    <div class="rightContent">
        <section class="r1">
            <div class="r1_top">
                <img src="../assets/img/timg.jpg" alt="图片正在加载中...">
                <h1>
                    <span>王者</span>Kent
                </h1>
            </div>
            <div class="r1_body">
                <p>来联系我吧</p>
                <div class="abc">
                    <el-tooltip class="item" effect="dark" content="QQ" placement="top">
                        <a href="javascript:"><i class="iconfont icon-QQ"></i></a>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="微信" placement="top">
                        <a href="javascript:"><i class="iconfont icon-weixin"></i></a>
                    </el-tooltip>
                     <el-tooltip class="item" effect="dark" content="微博" placement="top">
                        <a href="javascript:"><i class="iconfont icon-tubiaozhizuo-"></i></a>
                    </el-tooltip>
                </div>
                <div class="abc">
                     <el-tooltip class="item" effect="dark" content="Github" placement="top">
                        <a href="javascript:"><i class="iconfont icon-github"></i></a>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="CSDN" placement="top">
                        <a href="javascript:"><i class="iconfont icon-CN_csdnnet"></i></a>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="简历" placement="top">
                        <a href="javascript:"><i class="iconfont icon-jianli"></i></a>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="更多" placement="top">
                        <a href="javascript:"><i class="iconfont icon-gengduomore10"></i></a>
                    </el-tooltip>
                </div>
            </div>
        </section>
        <section class="r2">
            <p>Give me a like ?</p>
            <div>
                <i class="iconfont icon-aixin"></i>
                <span>123456789</span>
            </div>
        </section>
        <section class="r3"></section>
        <section class="r4">
            <h2 class="label">说点什么再走吧</h2>
            <ul class="r4_textwidget">
                <li class="r4_item">
                    <a href="javascript:">
                        <div class="r4_portrait">
                            <img src="../assets/img/tou.jpg" alt="图片正在加载中...">
                        </div>
                        <div class="r4_inner">
                            <div class="r4_author">游客在[文字文字文字]中说：</div>
                            <div class="r4_text">说什么说什么说什么呢</div>
                        </div>
                    </a>
                </li>
                <li class="r4_item">
                    <a href="javascript:">
                        <div class="r4_portrait">
                            <img src="../assets/img/tou.jpg" alt="图片正在加载中...">
                        </div>
                        <div class="r4_inner">
                            <div class="r4_author">游客在[文字文字文字]中说：</div>
                            <div class="r4_text">说什么说什么说什么呢</div>
                        </div>
                    </a>
                </li>
                <li class="r4_item">
                    <a href="javascript:">
                        <div class="r4_portrait">
                            <img src="../assets/img/tou.jpg" alt="图片正在加载中...">
                        </div>
                        <div class="r4_inner">
                            <div class="r4_author">游客在[文字文字文字]中说：</div>
                            <div class="r4_text">说什么说什么说什么呢</div>
                        </div>
                    </a>
                </li>
                <li class="r4_item">
                    <a href="javascript:">
                        <div class="r4_portrait">
                            <img src="../assets/img/tou.jpg" alt="图片正在加载中...">
                        </div>
                        <div class="r4_inner">
                            <div class="r4_author">游客在[文字文字文字]中说：</div>
                            <div class="r4_text">说什么说什么说什么呢</div>
                        </div>
                    </a>
                </li>
                <li class="r4_item">
                    <a href="javascript:">
                        <div class="r4_portrait">
                            <img src="../assets/img/tou.jpg" alt="图片正在加载中...">
                        </div>
                        <div class="r4_inner">
                            <div class="r4_author">游客在[文字文字文字]中说：</div>
                            <div class="r4_text">说什么说什么说什么呢</div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="r5">
            <h2 class="label">到处看看吧，总有你喜欢的</h2>
            <ul class="r5_textwidget">
                <li class="r5_item">
                    <a href="javascript:">
                        mpvue 同时开发和打包成H5和微信小程序
                    </a>
                    ———360 次阅读
                </li>
                <li class="r5_item">
                    <a href="javascript:">
                        mpvue 同时开发和打包成H5和微信小程序
                    </a>
                    ———360 次阅读
                </li>
                <li class="r5_item">
                    <a href="javascript:">
                        mpvue 同时开发和打包成H5和微信小程序
                    </a>
                    ———360 次阅读
                </li>
                <li class="r5_item">
                    <a href="javascript:">
                        mpvue 同时开发和打包成H5和微信小程序
                    </a>
                    ———360 次阅读
                </li>
                <li class="r5_item">
                    <a href="javascript:">
                        mpvue 同时开发和打包成H5和微信小程序
                    </a>
                    ———360 次阅读
                </li>
                <li class="r5_item">
                    <a href="javascript:">
                        mpvue 同时开发和打包成H5和微信小程序
                    </a>
                    ———360 次阅读
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    export default{

    }
</script>
<style lang="less">
    .rightContent{
        section{
            transition: all 0.2s linear;
            position: relative;
            background: #fff;
            padding:15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        section:hover{
            transform: translate(0,-3px);
            box-shadow:0 15px 30px rgba(0,0,0,.1);
        }
        .r1{
            .r1_top{
                position: relative;
                text-align: center;
                img{
                    width:100%;
                    min-height: 100px;
                }
                h1{
                    position: absolute;
                    bottom:5px;
                    left:50%;
                    font-size: 20px;
                    letter-spacing: 0.5px;
                    color:#fff;
                    text-shadow: 1px 1px 1px rgba(0,0,0,0.7);
                    font-weight: 700;
                    width:130px;
                    margin: 0 0 0 -65px;
                    span{
                        opacity: 0.3;
                    }
                }
            }
            .r1_body{
                p{
                    font-size: 14px;
                    margin: 5px 0 8px 0;
                    font-weight: 700;
                    text-align: center;
                }
                .abc{
                    width:100%;
                    text-align: center;
                   .item{
                           display: inline-block;
                            margin-bottom: 10px;
                            position: relative;
                            text-decoration: none;
                            text-align: center;
                            .iconfont{
                                display: inline-block;
                                font-size: 19px;
                                width: 45px;
                                height: 45px;
                                line-height: 45px;
                                border-radius: 50%;
                                color: rgba(0, 0, 0, 0.5);
                                background: rgba(0, 0, 0, 0.1);
                                -webkit-transition: all 0.3s ease-in-out;
                                transition: all 0.3s ease-in-out;
                                font-style: normal;
                                margin: 0 3.2px;
                            }
                       }
                       .iconfont:hover{
                           background-color: rgb(244,105,44);
                               color:#fff;
                       }
                }
            }
        }
        .r2{
            min-height: 100px;
            p{
                color:#DF2050;
                cursor: pointer;
                font-size: 20px;
                margin-bottom: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
                margin-top:10px;
                font-weight: 500;
            }
            div{
               color:#DF2050;
               cursor: pointer;
               text-align: center;
               font-size: 40px;
               position: absolute;
               width:100%;
               height:100px;
               line-height: 100px;
               left:0;
               top:30px;
                i{
                    color:#DF2050;  
                    font-size: 30px;
                }
                i:hover{
                    font-size: 40px;
                }
            }
        }
        .r4{
            .label{
                background-color:#97dffd;
                border-color:#97dffd;
                margin:5px 0 15px 2px;
                font-size:14px;
                position: relative;
                left:-32px;
                border-radius:0 4px 4px 0;
                padding:7px 11.2px 7px 32px;
                display:inline-block;
                color:#fff;
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
            .r4_textwidget{
                .r4_item{
                     font-size: 13px;
                     line-height: 20px;
                     list-style: none;
                    a{
                        display:block;
                        padding:5px;
                        -webkit-transition: all 0.3s ease-out;
                        transition: all .3s ease-out;
                        border-bottom: 1px solid #ddd;
                        margin:5px 0;
                        color: #444;
                        text-decoration:none;
                        .r4_portrait{
                            float:left;
                            img{
                                border-radius:50%;
                                width:32px;
                                height:32px;
                                object-fit: cover;
                            }
                        }
                        .r4_inner{
                            margin-left:40px;
                            .r4_author{
                                font-weight: 700;
                            }
                            .r4_text{
                                font-size:12px;
                                text-align: justify;
                            }
                        }
                    }
                }
            }
        }
        .r5{
            .label{
                background-color:#97dffd;
                border-color:#97dffd;
                margin:5px 0 15px 2px;
                font-size:14px;
                position: relative;
                left:-32px;
                border-radius:0 4px 4px 0;
                padding:7px 11.2px 7px 32px;
                display:inline-block;
                color:#fff;
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
            .r5_textwidget{
                .r5_item{
                    list-style: none;
                    display: list-item;
                    padding: 8px 0;
                    text-align: justify;
                    a{
                        font-weight: 600;
                        color:#444;
                        text-decoration:none;
                    }
                }
            }
        }
        
    }
</style>