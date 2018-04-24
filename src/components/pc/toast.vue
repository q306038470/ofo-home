<template>
    <div class="wrap">
        <div class="con" v-if="success">
            <p><img src="~/assets/ic_toast_succeed.svg" alt=""></p>
            <span>信息提交成功</span>
        </div>
        <div class="con" v-else>
            <p><img src="~/assets/ic_toast_failure.svg" alt=""></p>
            <span>信息提交失败</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tip',
        props: ['success'],
        data: function () {
            return {
            }
        },
        methods: {
            check (item,items) {
                window.scrollTo(0, 0);
                for (var i = 0; i < items.length; i++) {
                    items[i].checked = false;
                }
                items[item.index].checked  = true;
            }
        },
        mounted(){
            // setTimeout(function(){

            // })
        }
    }
</script>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    .wrap {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    .con {
        width: 170px;
        height: 130px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -85px;
        margin-top: -65px;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }
    p {
        padding: 26px 0 16px;
    }
</style>
