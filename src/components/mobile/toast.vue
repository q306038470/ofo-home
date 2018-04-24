<template>
    <div class="wrap">
        <div class="con" v-if="success">
            <div class="success"><p></p></div>
            <span>信息提交成功</span>
        </div>
        <div class="con" v-else>
            <div class="fail"><p></p></div>
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

<style lang="scss" scoped>
@import "../../style/rem.scss";
@import "../../style/normalize.scss";
@import "../../style/reset.scss";
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
        width: rem(116);
        height: rem(89);
        border-radius: rem(10);
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: rem(-58);
        margin-top: rem(-45);
        text-align: center;
        color: #fff;
        font-size: rem(15);
    }
    p {
        height: rem(25);
    }
    .success {
        padding: rem(19) 0 rem(10);
        p {
            background: url(../../assets/ic_toast_succeed.svg) no-repeat center;
            background-size: contain;
        }
    }
    .fail {
        padding: rem(19) 0 rem(10);
        p {
            background: url(../../assets/ic_toast_failure.svg) no-repeat center;
            background-size: contain;
        }
    }
</style>
