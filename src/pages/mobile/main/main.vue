<template>
    <div class="main_wrapper" v-title data-title="ofo-首页" @click="closeHandle">
        <nav-bar :values="values" @clicked="rmVideo"></nav-bar>
        <div class="player" @click="playVideo">
            <div class="poster">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/poster.png" alt="" class="bg-poster">
                <div class="float">
                    <p class="play_title">让世界没有陌生的角落</p>
                    <p class="play_show">我们已服务于全球21个国家，超过250座城市，2亿用户。</p>
                    <div class="playClick">
                        <span>点击观看视频</span>
                        <!-- <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/play.png" alt=""> -->
                        <svg width="15px" height="15px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          	<!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
							<title>Combined Shape</title>
							<desc>Created with Sketch.</desc>
							<defs></defs>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="首页" transform="translate(-444.000000, -4630.000000)" fill="#FFFFFF">
										<g id="Group-15-Copy" transform="translate(36.000000, 4431.000000)">
											<path d="M423,229 C414.715729,229 408,222.284271 408,214 C408,205.715729 414.715729,199 423,199 C431.284271,199 438,205.715729 438,214 C438,222.284271 431.284271,229 423,229 Z M423,226 C429.627417,226 435,220.627417 435,214 C435,207.372583 429.627417,202 423,202 C416.372583,202 411,207.372583 411,214 C411,220.627417 416.372583,226 423,226 Z M427.570845,214.857493 L420.514496,219.091303 C420.040915,219.375451 419.426655,219.221886 419.142507,218.748305 C419.049258,218.59289 419,218.415054 419,218.23381 L419,209.76619 C419,209.213906 419.447715,208.76619 420,208.76619 C420.181244,208.76619 420.35908,208.815448 420.514496,208.908697 L427.570845,213.142507 C428.044425,213.426655 428.19799,214.040915 427.913842,214.514496 C427.829393,214.655245 427.711595,214.773043 427.570845,214.857493 Z" id="Combined-Shape"></path>
										</g>
								</g>
							</g>
                        </svg>
                    </div>
                </div>
            </div>
            <div v-show="isClicked" id="mask" @click="rmVideo"></div>
            <video v-show="isClicked" id="main-video" ref="mainvideo" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/new.mp4" loop webkit-playsinline="true"></video>
            <!-- <video v-show="isClicked" id="main-video" ref="mainvideo" src="../../../assets/mainVideo.mp4" loop webkit-playsinline="true"></video> -->

        </div>
      <!--<a href="ofo.com">1222</a>-->
        <div class="main">
            <div class="main-article">
                <main-desc :picUrl="info[0].url" title="科技" :detail="info[0].detail" isOpen="true" context="数据开放平台" anotherPage="/static/bigdata/mobile/index.html"></main-desc>
                <main-desc :picUrl="info[1].url" title="全球化" :detail="info[1].detail"></main-desc>
                <main-desc :picUrl="info[2].url" title="社会责任" :detail="info[2].detail"></main-desc>
                <main-desc :picUrl="info[3].url" title="政府合作" :detail="info[3].detail" isLast="isLast"></main-desc>
            </div>
            <video-wrapper :videos="videos"></video-wrapper>
        </div>

        <foot></foot>
    </div>

</template>



<script>
	import navBar from "../../../components/mobile/nav-bar";
	import Foot from "../../../components/mobile/foot";
	import mainDesc from "../../../components/mobile/main-desc";
	import videoWrapper from "../../../components/mobile/video-wrapper";
	import utils from '../../../util/utils';

	export default {
		name: "mainPage",
		data() {
			return {
				values: [
					{ text: "首页", index: 0, checked: true, flag: true, url: "main" },
					{ text: "新闻", index: 1, checked: false, flag: true, url: "news" },
					{ text: "关于", index: 2, checked: false, flag: false, url: "about" },
					{text: "商业合作", index: 3, checked: false, flag: false},		
				],
				videos: [
					{
					title: "一辆ofo的诞生",
					index: 0,
					url: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aofosbirth.png",
					className: "title1",
					isCurMp4: false,
					src: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/a-ofo-born.mp4"
					// src: require('../../../assets/a-ofo-born.mp4')
					},
					{
					title: "ofo科技访谈",
					index: 1,
					url: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/ofo_tec_vis.png",
					className: "title2",
					isCurMp4: false,
					src: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/ofo-science-talk.mp4"
					// src: require('../../../assets/ofo-science-talk.mp4')

					},
					{
					title: 'ofo小黄车"奇点"大数据',
					index: 2,
					url: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/qidianbigdata.png",
					className: "title3",
					isCurMp4: false,
					src: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/ofo-big-data.mp4"
					// src: require('../../../assets/ofo-big-data.mp4')

					}
				],
				isClicked: false,
				isLast: true,
				info: [
					{
					url: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/wulianwang.png",
					detail:
						"ofo小黄车是全球第一个无桩共享单车平台，首创“无桩单车共享”模式。用户可通过手机解锁自行车，享受随时随地有车骑的共享出行服务。更好骑的共享单车，领先的移动物联网智能锁，全球最大的人工智能大数据平台“奇点”系统。ofo建立起从用户舒适骑行到以物联网为载体、人工智能为核心的科技闭环。"},
					{
					url: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/allWorld.png",
					detail:
						"ofo在全球20个国家超过250座城市提供服务。其中海外运营城市超过50座，投放超过10万辆共享单车，为海外用户累计提供超过1000万次骑行服务。目前，ofo 在海外由当地用户贡献的订单占比已超过99%，优秀的产品、技术和运营实力，让ofo受到越来越多国家的认可，成为真正服务全球的共享单车平台。"},
					{
					url: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/societyDuty.png",
					detail:
						"ofo致力于倡导绿色出行理念，通过整合自行车产能及供应链，在全球推广共享单车的出行理念，为各大城市提供便捷高效的绿色出行服务，满足用户的美好生活需要，同时推动自行车行业转型升级、打造城市绿色交通体系、提升城市出行效率，助力信用城市、智慧城市建设。"},
					{
					url: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile-government.png',
					detail:
						"ofo自进入城市以来，先后与全国众多城市政府及管理部门深入合作，为当地城市交通及经济发展贡献力量。通过良好的沟通机制，ofo与各地政府共同探索政企共治的共享单车运营管理模式，描绘新时代下智慧城市的发展蓝图。ofo 与城市管理部门的合作模式，成为城市创新治理的新样本。"}
				]
			};
		},
		components: {
			"nav-bar": navBar,
			"foot": Foot,
			"main-desc": mainDesc,
			"video-wrapper": videoWrapper,
		},
		methods: {
			closeHandle(){
				let dev = utils.devicetype();
				if(dev.isIOS){
					this.isClicked = false;
				}
			},

			playVideo() {
				this.isClicked = true;
				setTimeout(() => {
					const oVideo = this.$refs.mainvideo;
					const doc = document;
					oVideo.addEventListener("webkitfullscreenchange", function(e) {
					//TODO 未侦听到该事件
					if (!doc.webkitIsFullScreen) { //退出全屏暂停视频
						video.pause();
					};
				}, false);
				oVideo.addEventListener("fullscreenchange ", function(e) {
					if (!doc.webkitIsFullScreen) { //退出全屏暂停视频
						video.pause();
					};
				}, false);
					oVideo.play();
				}, 100);
			},
			rmVideo(e) {
				this.isClicked = false;
				if (this.isClicked) {
					document.body.style.overflow = 'hidden';
				}
				else {
					document.body.style.overflow = 'auto';
				}
				window.event? window.event.cancelBubble = true : e.stopPropagation();
			}
		}
	};
</script>

<style lang="scss" scoped>
@import "../../../style/rem.scss";
.main_wrapper {
  	width: 100%;
}
.poster {
  	position: relative;
}
.poster .bg-poster {
  	width: 100%;
}
.poster .float {
	position: absolute;
	// background: #000000;
	background-color:rgba(0,0,0,0.4);  
	// opacity: 0.4;
	color: #ffffff;
	top: 0;
	width: 100%;
	height: 93.3%;
	.play_title {
		position: absolute;
		top: rem(75);
		left: 50%;
		margin-left: rem(-120);
		font-family: PingFangSC-Semibold;
		font-weight: 700;
		font-size: rem(24);
		height: rem(33.5);
		line-height: rem(33.5);
		opacity: 1;
    }
  	.play_show {
		font-family: PingFangSC-Regular;
		font-size: rem(13);
		position: absolute;
		top: rem(108.5);
		width: rem(360);
		left: 50%;
		margin-left: rem(-180);
		height: rem(18.5);
		line-height: rem(18.5);
		text-align: center;
 	}
  	.playClick {
		position: absolute;
		top: rem(137);
		left: 50%;
		margin-left: rem(-50);
		height: rem(18.5);
		span {
		font-family: PingFangSC-Medium;
		font-size: rem(13);
		height: rem(18.5);
		position: relative;
		font-weight: 700;
		top: rem(-3);
		}
	}
}
.player{
	position: relative;
	overflow: hidden;
}
.player video {
	width: 100%;
	position: absolute;
	top: rem(44);
	z-index: 1000;
}

.main {
	position: relative;
	.main-article {
		position: relative;
		background-size: cover;
	}
}
#mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, .6);
}
</style>
