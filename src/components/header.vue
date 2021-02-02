<template>
    <div class="top">
        <div class="navigation">
            <el-row class="container">
                <el-col :span="24">
                    <!-- pc端 -->
                    <div class="pc">
                        <el-menu 
                         class="el-menu-demo" mode="horizontal" 
                            text-color="#fff"
                            active-text-color="#fff"
                            active-background-color="#000"
                            router
                        >
                            <el-menu-item index="/home"> <i class="iconfont icon-home"></i>首页</el-menu-item>
                            <el-submenu index="2">
                              <template slot="title"> <i class="iconfont icon-donework"></i>分类</template>
                              <el-menu-item index="2-1">选项1</el-menu-item>
                              <el-menu-item index="2-2">选项2</el-menu-item>
                              <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title"> <i class="iconfont icon-AIshiyanshi"></i>实验室</template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                                <el-menu-item index="3-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="4"><i class="iconfont icon-phonebill"></i>赞赏</el-menu-item>
                            <el-menu-item index="5"><i class="iconfont icon-xiaohuoban"></i>伙伴</el-menu-item>
                            <el-menu-item index="/message"><i class="iconfont icon--liuyanban"></i>留言板</el-menu-item>
                            <el-menu-item index="/about"><i class="iconfont icon-guanyu"></i>关于</el-menu-item>
                          </el-menu>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="headImg">
            <div class="scen">
                <div class="sc">welcome</div>
            </div>
            <div class="card">
                <a class="a_img" href="javascript:">
                    <img src="../assets/img/logo.jpg" alt="图片正在加载...">
                </a>
                <h2>
                    <a class="a_h" href="javascript:">Write the Code. Change the World.</a>
                </h2>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods:{},
        components:{}
    }
</script>
<style>
.top{
    width: 100%;
}
.top .navigation {
    width: 100%;
    background: rgba(40, 42, 44, 0.6);
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    height: 38px;
}
.top .navigation .container {
    width: 80%;
    margin: 0 auto;
    padding: 0 10px;
}
.el-menu-item.is-active {
   background-color: rgb(19, 69, 129) !important;
}
.top .navigation .container .pc .el-menu-demo {
    background: transparent;
    border-bottom: none!important;
}
.top .navigation .container .pc .el-menu-demo .el-submenu__title, .top .navigation .container .pc .el-menu-demo .el-menu-item {
    line-height: 38px;
    height: 38px;
    border-bottom: none;
}
.top .navigation .container .pc .el-menu-demo .el-submenu__title .el-submenu__icon-arrow, .top .navigation .container .pc .el-menu-demo .el-menu-item .el-submenu__icon-arrow {
    color: #fff;
}
  .top .navigation .container .pc .el-menu-demo .el-menu-item:hover,.top .navigation .container .pc .el-menu-demo .el-submenu__title:hover{
    background-color:rgb(63,59,93)!important;
}
 .top .navigation .container .pc .el-menu-demo .el-menu-item.is-active{
    background-color:  rgb(63,59,93)!important;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
    background-color:  rgb(63,59,93)!important; 
}
.el-menu--horizontal .el-menu--popup-bottom-start{
    background-color:  rgb(63,59,93)!important; 
}
.el-menu--horizontal .el-menu--popup-bottom-start .el-menu-item:hover{
    background-color:  rgb(99, 96, 168) !important;
}
.top .headImg img{
    width:100%;
}
.pc .el-menu-demo .iconfont{
    color:#fff;
    font-size: 24px;
    margin-right: 5px;
}
.top .headImg{
    height: 650px;
    position: relative;
    width: 100%;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
    margin-bottom: 90px;
    background-image:url("http://mangoya.cn/upload/theme/yourName/20fbf79218e1c60c9bc96c1442f916fa.jpg")
}
.top .headImg .scen{
    position:absolute;
    width:100%;
    text-align: center;
    color:#fff;
    left: 0;
    top:160px;
    font-family: SigmarOne;
    font-size: 100px;
    text-shadow: 0 2px 2px #47456d;
}
.top .headImg .card{
    width:70%;
    text-align: center;
    margin:auto;
    position: relative;
    top:480px;
    padding:40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgb(230, 244, 249,0.8);
    z-index:1;
    animation: b 1s ease-out;
	-webkit-animation: b 1s ease-out;
}
.top .headImg .card .a_img img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
}
.top .headImg .card .a_img img:hover{
    -webkit-transform:rotate(360deg);
    transform:rotate(360deg);
    -webkit-transition:-webkit-transform 1s linear;
    transition:transform 1s linear;
}
.top .headImg .card h2{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
}
.top .headImg .card .a_h{
    background: -webkit-gradient(linear, left top, right top, from(#DF2050), to(#48456D));
    background: linear-gradient(to right, #DF2050, #48456D);
    -webkit-background-clip: text;
    color: transparent;
}
@-webkit-keyframes b {
	0% {
		-webkit-transform: translateY(90px);
		transform: translateY(90px);
	}
	80% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px)
	}
	90% {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px)
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
}

@keyframes b {
	0% {
		-webkit-transform: translateY(90px);
		transform: translateY(90px);
	}
	80% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px)
	}
	90% {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px)
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
}
</style>