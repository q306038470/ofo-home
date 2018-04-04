<template>
	<div class="per-new">
		<div class="imgs">
			<img :src="[pg.pic]" alt="">
		</div>
		<p class="title">
			{{pg.title}}
		</p>
		<p :class="[lineNum ? 'line' : 'no-line']"></p>
	</div>
</template>

<script>
	export default {
		name: 'PerNew',
		props: ['pg', 'no', 'showNum', 'perLoad', 'current', 'total'],
		data() {
			return {}
		},
		computed: {
			lineNum() {
			if(this.no == this.showNum+(this.current.a-1)*this.perLoad-1 || this.no == this.total-1) {
				return false;
			}
			return true;
			}
		}
  	}
</script>

<style lang="scss" scoped>
	@import '../../style/rem.scss';
	.per-new {
		width: 100vw;
		height: rem(232.5);
	}
	.per-new .imgs {
		width: rem(338.5);
		height: rem(160.5);
		margin: rem(30)  auto rem(5) auto;
	}
	.per-new .imgs img {
		width: 100%;
		height: 100%;
	}
	.per-new .title {
		width: rem(338.5);
		max-height: rem(49);
		font-size: rem(18);
		font-family: PingFangSC-Semibold;
		font-weight: 700;
		color: #3E3A39;
		margin: 0 auto;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.per-new .line {
		width: rem(338.5);
		height: 1px;
		background: #D8D8D8;
		margin: rem(24) auto 0 auto;
	}
	.per-new .no-line {
		background: #FFFFFF;
	}
</style>
