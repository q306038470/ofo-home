<template>
	<div class="contain" @scroll="scrollFn">
		<nav-bar class="navbar" :arr="arr" :imgSrc="imgSrc" :flag="flag"></nav-bar>
		<video class="mainVideo" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/new.mp4" muted autoplay loop></video>
		
		<!-- <video class="mainVideo" src="../../../assets/new.mp4" autoplay loop></video> -->
		<div class="logo">
			<icon-pic class="demopic"></icon-pic>
		</div>
		<a href="#pic" class="aboutIcon">
		<img label="ccc" class="icon" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/arrows.svg" alt="">
		<p class="icontext">了解更多</p>
		</a>
		<div id="pic">
		<img class="demo" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/element2.svg" alt="">
		<img class="demo1" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/element1.svg" alt="">
		<img class="demo2" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/element3.svg" alt="">
		<img class="demo3" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/element4.svg" alt="">
		<pic-left class="pic1" :imgSrc="msg[0].url" :title="msg[0].title" :detail="msg[0].detail" :show="msg[0].show"></pic-left>
		<pic-right class="pic2" :imgSrc="msg[1].url" :title="msg[1].title" :detail="msg[1].detail" :show="msg[1].show"></pic-right>
		<pic-left class="pic3" :imgSrc="msg[2].url" :title="msg[2].title" :detail="msg[2].detail" :show="msg[2].show"></pic-left>
		<pic-right class="pic4" :imgSrc="msg[3].url" :title="msg[3].title" :detail="msg[3].detail" :show="msg[3].show"></pic-right>
		<ideo class="vi" v-on:changecheck="changeCheck"></ideo>
		<div class="adiv">
			<ad-text class="ad" :month="adArr[0].month" :imgSrc="adArr[0].imgSrc" :title="adArr[0].title" :text="adArr[0].text" :index="adArr[0].index" :idx="adArr[0].id"></ad-text>
			<ad-text class="ad" :month="adArr[1].month" :imgSrc="adArr[1].imgSrc" :title="adArr[1].title" :text="adArr[1].text" :index="adArr[1].index" :idx="adArr[1].id"></ad-text>
			<ad-text class="ad" :month="adArr[2].month" :imgSrc="adArr[2].imgSrc" :title="adArr[2].title" :text="adArr[2].text" :index="adArr[2].index" :idx="adArr[2].id"></ad-text>
		</div>
		<video-modal class="modal" v-if="check" :videoSrc="videoSrc" v-on:hidden="closeCheck"></video-modal>
		<div class="mainBottom">
			<img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/foot_picture_2.png" alt="">
		</div>
		<foot class="pagefoot"></foot>
		</div>
	</div>
</template>

<script>
	import NavBar from '../../../components/pc/NavBar'
	import textBar from '../../../components/pc/textBar'
	import foot from '../../../components/pc/footer'
	import textHead from '../../../components/pc/textHead'
	import video from '../../../components/pc/main/video'
	import picLeft from '../../../components/pc/main/picLeft'
	import picRight from '../../../components/pc/main/picRight'
	import iconPic from '../../../components/pc/main/iconPic'
	import adText from '../../../components/pc/main/adText'
	import videoModal from '../../../components/pc/main/videoModal'
	import control from '../../../components/pc/main/controls'

	export default {
		name: 'Main',
		data: function () {
			return {
				arr: [{title:'首页',checked:true,index:0},{title:'新闻',checked:false,index:1},{title:'关于',checked:false,index:2},{title:'商业合作',checked:false,index:3}],
				imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_1.svg',
				flag: false,
				check: false,
				videoSrc: '',
				msg: [{
				LoR: true,
				title:'科技',
				url: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/pc-science.png',
				show: true,
				detail: ['ofo小黄车是全球领先的无桩共享单车平台。用户可通过手机解锁自行车，享受随时随地有车骑的共享出行服务。更好骑的共享单车，领先的移动物联网智能锁，全球领先的人工智能大数据平台“奇点”系统。ofo建立起从用户舒适骑行到以物联网为载体、人工智能为核心的科技闭环。']
				},{
				LoR: false,
				title: '全球化',
				url:  'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/pc-global.png',
				show: false,
				detail: ['ofo在全球21个国家超过250座城市提供服务。其中海外运营城市超过50座，投放超过10万辆共享单车，为海外用户累计提供超过1000万次骑行服务。目前，ofo 在海外由当地用户贡献的订单占比已超过99%，优秀的产品、技术和运营实力，让ofo受到越来越多国家的认可，成为真正服务全球的共享单车平台。']
				},{
				LoR: true,
				title: '社会责任',
				url: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/pc-social-duty.png',
				show: false,
				detail: ['ofo致力于倡导绿色出行理念，通过整合自行车产能及供应链，在全球推广共享单车的出行理念，为各大城市提供便捷高效的绿色出行服务，满足用户的美好生活需要，同时推动自行车行业转型升级、打造城市绿色交通体系、提升城市出行效率，助力信用城市、智慧城市建设。']
				},{
				LoR: false,
				title: '政府合作',
				url: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/pc-government.png',
				show: false,          
				detail: ['ofo自进入城市以来，先后与全国众多城市政府及管理部门深入合作，为当地城市交通及经济发展贡献力量。通过良好的沟通机制,ofo与各地政府共同探索政企共治的共享单车运营管理模式，描绘新时代下智慧城市的发展蓝图。ofo 与城市管理部门的合作模式,成为城市创新治理的新样本。']
				}],
				adArr: [{    
					month: 3,
					imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/news/feed_news_1.png',
					// imgSrc: require('../../../assets/feed_news_1.png'),
					title: 'ofo小黄车已完成E2-1轮融资8.66亿美元',
					index: 0,
					text: '"3月13日（北京）— 全球最大的共享单车平台ofo小黄车宣布完成E2-1轮融资8.66亿美元。本轮融资由阿里巴巴领投，灏峰集团、天合资本、蚂蚁金服与君理资本共同跟投。这是共享单车行业由规模化增长转入精细化运营阶段获得的首次融资，再次创下共享单车行业单笔最高融资纪录。',
					id: 20180313
				},
				{
					month: 3,
					imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/news/feed_news_2.png',
					// imgSrc: require('../../../assets/feed_news_2.png'),
					title:'ofo推行信用免押金一周年 累计免押近3000万人金额超40亿元 ofo宣布信用免押金实施一周年 三大方面建立信用体系',
					index: 1,
					text:'今日ofo小黄车宣布实施信用免押金一周年，ofo称，一年以来，已累计免押近3000万人，为用户节省押金超过40亿元。',
					id: 20180312
				},
				{
					month: 2,
					imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/news/feed_news_3.png',
					// imgSrc: require('../../../assets/feed_news_3.png'),
					title:'共享单车首个经济社会影响力报告出炉  共创造2213亿元经济社会影响',
					index: 2,
					text:'2月6日，中国信息通信研究院（以下简称“中国信通院”）与ofo小黄车达成战略合作，双方将共同推进共享单车关键技术标准化，促进行业规范有序发展。期间，中国信通院还与北大光华-ofo小黄车共享经济研究中心发布《2017年共享单车经济社会影响报告 》（以下简称《报告》）。据悉，这是行业首个经济社会影响力报告，《报告》指出共享单车有效拉动了上下游产业，不断提振行业内生动力，持续营造新生态体系。2017年共计为全社会带来2213亿元经济社会影响，包括提升民生福祉1458亿元，创造社会福利301亿元，赋能传统产业222亿元，拉动新兴产业232亿元，拉动就业量39万人次。',
					id: 20180206
				}]
			}
		},
		components: {
			'nav-bar': NavBar,
			'text-bar': textBar,
			'foot': foot,
			'text-head': textHead,
			'ideo': video,
			'pic-left': picLeft,
			'pic-right': picRight,
			'icon-pic': iconPic,
			'ad-text': adText,
			'video-modal': videoModal,
			'control' : control
		},
		methods: {
			changeCheck (check,src) {
				this.check = check;
				this.videoSrc = src;
			},
			closeCheck (check) {
				this.check = check;
			},
			scrollFn(e){
				this.flag = e.target.scrollTop;
			}
		},
		created(){
			window.scrollTo(0, 0);
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}
	.contain {
		position: relative;
		width: 100vw;
		height: 100%;
		overflow-y: auto;
	}
	.mainVideo {
		display: block;
		position: absolute;
		top: 0px;
		width: 100vw;
		z-index: 100;
	}
	.logo {
		position: absolute;
		width: 48.7vw;
		top: 15vw;
		left: 25.7vw;
		right: 25.7vw;
		z-index: 200;
	}
	.aboutIcon {
		display: block;
		position: absolute;
		text-decoration: none;
		top: 48vw;
		width: 100vw;
		text-align: center;
		z-index: 200;
	}
	@keyframes iconmove {
		0%{transform:translateY(0px)}
		100%{transform:translateY(10px)}
	}
	.icon {
		animation: iconmove 2s linear 0.5s infinite alternate both;
	}
	.icontext {
		display: block;
		margin-top: 12px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #FFFFFF;
	}
	#pic {
		position: absolute;
		width: 100vw;
		top: 56.1vw;
		overflow: hidden;
	}
	.pic1 {
		margin: 82px auto 20px auto;
	}
	.pic2 {
		margin: 0 auto 20px auto;
	}
	.pic3 {
		margin: 0 auto 20px auto;
	}
	.pic4 {
		margin: 0 auto 20px auto;
	}
	.vi {
		width: 100vw;
		height: 448px;
		margin-top:8vw; 
		background: #F6F6F6;
	}
	.adiv {
		margin-top: 52vw;
	}
	.ad {
		margin-bottom: 4vw;
		cursor: pointer;
	}
	.mainBottom {
		margin-top: -5.6vw;
	}
	.mainBottom img {
		width: 100%;
	}
	.pagefoot {
		margin-top: -5px;
	}
	.modal {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.navbar {
		position: fixed;
		top:0px;
		z-index: 999;
		margin-top: 0px;
		margin-left: 0px;
	}
	.footer {
		position: absolute;
		bottom: 0px;
	}
	.demo {
		position: absolute;
		width: 28vw;
		left: -9vw;
		top: 44.2vw;
	}
	.demo1 {
		position: absolute;
		width: 25.4vw;
		right: -6.8vw;
		top: -6vw;
	}
	.demo2 {
		position: absolute;
		width: 17.2vw;
		right: -4.3vw;
		top: 78.3vw;
	}
	.demo3 {
		position: absolute;
		width: 23.3vw;
		left: -6vw;
		top: 112vw;
	}
</style>
