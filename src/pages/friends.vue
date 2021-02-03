<template>
    <div class="bg">
        <top></top>
        <div class="content">
            <el-row :gutter="100">
                <el-col :md="16" :sm="24">
                    <friend></friend>
                    <mess></mess>
                </el-col>
                <el-col :md="8" :sm="24">
                    <modRight></modRight>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import top from '../components/header.vue';
    import modRight from "../components/modRight.vue";
    import friend from "../components/friendsList.vue";
    import mess from '../components/messageList.vue';
    export default {
        data (){
            return{}
        },
        methods:{},
        components:{
            top,
            modRight,
            friend,
            mess
        }
    }
</script>
<style lang="less">
</style>