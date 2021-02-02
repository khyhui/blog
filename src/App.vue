<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name:"app"
  }
</script>
<style lang="less">
  @tcolors:#97dffd;/**按钮颜色 */
  @tcolord:#48456D;//按钮hover 的颜色
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
  }
  body{
    font-family:Arial,"STHeiti", Helvetica, sans-serif;
    background:#efefef;
    font-size:14px;
    color:#444!important;
    min-height:100vh;
    width:100%;
    overflow-x: hidden;
    -webkit-overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  a{
     text-decoration:none;
  }
  .bg{
      font-family: Arial, "STHeiti", Helvetica, sans-serif;
        background: #efefef;
        background-image: url("assets/img/bg-content.jpg");
        background-attachment: fixed;
        background-size: 100%;
        font-size: 14px;
        color: #444!important;
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
        -webkit-overflow-x: hidden;
        -webkit-tap-highlight-color: transparent;
  }
  .content{
            max-width: 80%;
            margin: 0 auto;
            padding: 0 10px;
        }
  .bg .content .s_item{
    width: 100%;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    position: relative;
    background: #fff;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 40px;
    font-size: 15px;
  }
  /**公共按钮 */
  .tmsg-r-info .info-submit .tcolors-bg{
    width:100%;
    height:30px;
    text-align: center;
    background:@tcolors;
    line-height:30px;
    color:#fff;
    border-radius: 5px;
    margin-top: 20px;
   
  }
  .tmsg-r-info .info-submit .tcolors-bg:hover{
    background-color: @tcolord;
    cursor:pointer;
     transition: all .3s ease-in-out;
  }
</style>