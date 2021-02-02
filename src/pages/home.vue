<template>
    <div class="bg">
        <top></top>
        <div class="content">
            <el-row :gutter="30">
                <el-col :sm="24" :md="16">
                    <shareList></shareList>
                </el-col>
                <el-col :sm="24" :md="8">
                    <modRight></modRight>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>
<script>
    import header from '../components/header.vue';
    import modRight from '../components/modRight.vue';
    import shareList from '../components/shareList.vue';
    export default {
        name:"home",
        data(){
            return{}
        },
        methods:{},
        components:{
            'top':header,
            'modRight':modRight,
            "shareList":shareList
        }
    }
</script>
<style lang="less">
</style>