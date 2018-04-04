<template>
	<div class="con">
		<img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/partnerLogo.png" alt="">
		<div class="title">
			<span class="icon1"></span>
			<p class="text">欢迎合作伙伴与我们一起用科技重新定义共享</p>
			<span class="icon2"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'aboutPartner',
	}
</script>

<style scoped>
	.con {
		width: 100vw;
		top: 4.84vw;
		position: relative;
		margin-bottom: 180px;
	}
	.con img {
		display: block;
		margin: 0 auto;
		width: 76.4vw;
	}
	.title {
		position: relative;
		width: 77.1vw;
		height: 2.3vw;
		line-height: 2.3vw;
		margin: 60px auto 0 auto;
	}
	.icon1 {
		display: inline-block;
		position: absolute;
		width: 32%;
		height: 2px;
		opacity: 0.1;
		background: #000;
		margin-bottom: 0.56vw;
		top: 50%;
		left: 0;
		/* left: 3vw; */
		margin-top: -1px;
	}
	.icon2 {
		display: inline-block;
		position: absolute;
		width: 32%;
		height: 2px;
		opacity: 0.1;
		background: #000;
		margin-bottom: 0.56vw;
		top: 50%;
		right: 0;
		margin-top: -1px;
	}
	.text {
		display: inline-block;
		position: absolute;
		font-family: PingFangSC-Semibold;
		width: 33.5%;
		height: 2.3vw;
		font-size: 1.2vw;
		font-weight: 700;
		color: #3E3A39;
		left: 50%;
		margin-left: -15.75%;
	}
</style>

