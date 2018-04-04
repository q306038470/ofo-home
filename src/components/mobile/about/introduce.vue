<template>
    <div class="introduce">
        <ul>
            <li class="detail" v-for="item of items">
                <img :src="item.url" alt="">
                <div class="textNode">
                    <p class="name">{{item.name}}</p>
                    <p class="job">{{item.job}}</p>
                    <p class="context">{{item.detail}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Introduce',
    props: ['items']
}
</script>


<style lang="scss" scoped>
@import '../../../style/rem.scss';

*{
    padding: 0;
    margin: 0;
}

.introduce{
    margin-top: rem(18);
    width: rem(339);
    .detail{
        margin-bottom: rem(35);
        img{
            width: rem(339);
            height: rem(200);
        }
        .textNode{
            margin-top: rem(10);
            .name{
                font-family: PingFangSC-Semibold;
                font-size: rem(18);
                font-weight: 700;
                color: #3E3A39;
                margin-bottom: rem(3);
                height: rem(25);
                line-height: rem(25);
                font-weight: 700;
            }
            .job{
                font-family: PingFangSC-Semibold;
                font-size: rem(15);
                font-weight: 700;
                color: #3E3A39;
                height: rem(21);
                line-height: rem(21);
                font-weight: 700;                
            }
            .context{
                margin-top: rem(7);
                font-family: PingFangSC-Regular;
                font-size: rem(15);
                color: #3E3A39;
                line-height: rem(21);
                text-align: justify;
            }
        }

    }
}
</style>
