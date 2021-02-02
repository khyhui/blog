<template>
    <div class="bg">
        <top></top>
        <div class="content">
            <el-row :gutter="100">
                <el-col :md="16" :sm="24">
                    <msg></msg>
                    <messageList></messageList>
                </el-col>
                <el-col :md="8" :sm="24">
                    <modRight></modRight>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import header from '../components/header.vue';
    import modRight from '../components/modRight.vue';
    import messageList from '../components/messageList.vue';
    import msg from '../components/msg.vue'
    export default {
        name:"message",
        data(){
            return{}
        },
        methods:{},
        components:{
            'top':header,
            'modRight':modRight,
            'messageList':messageList,
            'msg':msg
        }
    }
</script>
<style></style>