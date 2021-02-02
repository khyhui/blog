<template>
    <div class="msgContent s_item">
        <header>
            <h1>留言板</h1>
        </header>
        <section>
            <p class="aboutT">
                <img src="../assets/img/about.png" alt="图片加载中...">
            </p>
            <div class="aboutC">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎大家留言</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎大家多多留下自己的见解</p>
            </div>
        </section>
    </div>
</template>
<script></script>
<style lang="less">
    .msgContent{
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