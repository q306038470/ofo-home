<template>
	<div class="per-new">
		<div class="imgs">
			<img :src="pg.pic" alt="">
		</div>
		<p class="time">
			{{pg.time}}
		</p>
		<p class="title">
			{{pg.title}}
		</p>
		<p class="desc">
			{{pg.desc}}
		</p>
	</div>
</template>

<script>
	export default {
		name: "PerNew",
		props: ["pg"],
		data: function() {
			return {};
		},
		methods: {}
		};
</script>

<style scoped>
	.per-new {
	width: 24.3vw;
	height: 31vw\9;
	float: left;
	margin-top: 40px;
	margin-left: 2.1vw;
	overflow: hidden;
	}
	.per-new p {
	width: 100%;
	}
	.per-new img {
	width: 100%;
	height: 18.24vw;
	}
	.per-new .time {
	font-size: 16px;
	color: #a0a0a0;
	margin-top: 0.7vw;
	}
	.per-new .title {
	font-size: 20px;
	font-family: PingFangSC-Semibold;
	font-weight: 700;
	color: #3e3a39;
	margin-top: 0.7vw;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	}
	.per-new .desc {
	position: relative;
	height: 60px;
	line-height: 20px;
	font-size: 16px;
	color: #a0a0a0;
	margin-top: 0.7vw;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
