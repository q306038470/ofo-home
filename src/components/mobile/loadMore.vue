<template>
	<div class="m-news-content">
		<div class="news">
			<div v-for="pg in this.getData" class="news-item" @click="goDetail(pg.id)">
				<per-new :pg="pg" class="per-news" :showNum="showNum" :perLoad="perLoad" :no="pgs.indexOf(pg)" :current="current" :total="pgs.length"></per-new>
			</div>
		</div>
		<div class="load-more" v-if="this.pgs.length>this.showNum && this.getData.length!=this.pgs.length" @click="loadMore">加载更多</div>
	</div>
</template>

<script>
	import perNew from './perNew'

	window.current = {a: 1};

	export default {
		name: 'loadMore',
		props: ['pgs', 'flag'],
		data() {
			return {
				showNum: 6,
				perLoad: 3,
				current: current
			}
		},
		components: {
			"per-new": perNew
		},
		computed: {
			getData() {
				return this.pgs.slice(0, this.perLoad * this.current.a + (this.showNum-this.perLoad));
			}
		},
		methods: {
			loadMore() {
				this.current.a++;
			},
			goDetail(idx) {
				this.$router.push({path: '/news/detail', query: {titleId: idx}});
			}
		}
	}
</script>

<style lang="scss">
  	@import '../../style/rem.scss';
	.m-news-content {
		width: 100vw;
		height: auto;
		display: block;
		overflow: hidden;
	}
	.news{
		width: 100vw;
		height: auto;
		display: block;
		overflow: hidden;
	}
    .load-more {
		width: rem(100);
		height: rem(21);
		text-align: center;
		margin: rem(18) auto;
		font-size: rem(15);
		font-family: PingFangSC-Medium;
		color: #A0A0A0 ;
    }
</style>
