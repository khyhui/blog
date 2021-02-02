<template>
    <div class="aboutContent s_item">
        <header>
            <h1>关于我</h1>
        </header>
        <section>
            <p class="aboutT">
                <img src="../assets/img/about.png" alt="图片加载中...">
            </p>
            <div class="aboutC">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎来到我的博客，喜欢分享一点自己遇到的坑</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;90后，小前端一枚</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢吃，逛各种技术博客</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎大家多多留下自己的见解</p>
            </div>
        </section>
    </div>
</template>
<script></script>
<style lang="less">
    .aboutContent{
        header{
            h1{
                text-align: center;
                font-size: 25px;
                font-weight: 700;
                margin: 10px 0;
            }  
        }
        section{
            margin-bottom: 60px;
            .aboutT{
                img{
                    max-width: 100%;
                }
            }
            .aboutC{
                p{
                    margin-top:10px;
                    color:#444;
                }
            }
        }
    }
</style>