<template>
	<div class="contain" @scroll="scrollFn">
		<nav-bar class="navbar" :arr="arr" :imgSrc="imgSrc" :flag="flag"></nav-bar>
		<video class="mainVideo" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/new.mp4" autoplay loop></video>
		
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
				detail: ['ofo小黄车是全球第一个无桩共享单车平台,  首创“无桩单车共享”模式。用户可通过手机解锁自行车，享受随时随地有车骑的共享出行服务。更好骑的共享单车，领先的移动物联网智能锁，全球最大的人工智能大数据平台“奇点”系统。ofo建立起从用户舒适骑行到以物联网为载体、人工智能为核心的科技闭环。']
				},{
				LoR: false,
				title: '全球化',
				url:  'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/pc-global.png',
				show: false,
				detail: ['ofo在全球20个国家超过250座城市提供服务。其中海外运营城市超过50座，投放超过10万辆共享单车，为海外用户累计提供超过1000万次骑行服务。目前，ofo 在海外由当地用户贡献的订单占比已超过99%，优秀的产品、技术和运营实力，让ofo受到越来越多国家的认可，成为真正服务全球的共享单车平台。']
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
					month: 1,
					imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/news/feed_news_1.png',
					// imgSrc: require('../../../assets/feed_news_1.png'),
					title: '印度浦那市政府与ofo签署战略合作协议 推动自行车网络基础设施建设',
					index: 0,
					text: '近日，全球最大的共享单车平台ofo小黄车与印度浦那市政府签署战略合作协议。根据协议，双方将致力于共同开展“浦那自行车计划”，通过推广共享单车的发展，推动自行车网络等基础设施的建设，以鼓励市民使用这一环保低碳的交通方式。',
					id: 20180105
				},
				{
					month:1,
					imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/news/feed_news_2.png',
					// imgSrc: require('../../../assets/feed_news_2.png'),
					title:'法国总统马克龙会见ofo创始人兼CEO戴威',
					index: 1,
					text:'北京时间1月9日，在中国进行国事访问的法国总统马克龙，与中国企业家代表进行会面。ofo小黄车创始人兼CEO戴威也受到接见，并与马克龙探讨了青年人创新创业、政府与企业共同推动共享单车发展等话题。',
					id:20180109
				},
				{
					month:1,
					imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/news/feed_news_3.png',
					// imgSrc: require('../../../assets/feed_news_3.png'),
					title:'ofo携手NBA球星何塞·巴里亚支持波多黎各飓风灾区重建 捐赠600辆小黄车辅助公共交通设施',
					index: 2,
					text:'近日， ofo小黄车联合达拉斯独行侠队球员何塞·巴里亚（JJ Barea）慈善基金会，为波多黎各的公益组织提供经济援助，支持受飓风玛丽亚损害的地区重建工作。ofo捐赠了600辆单车至波多黎各，特别是城市基础设施严重受损、公共交通不便的地区。这些单车将被捐赠给波多黎各男孩女孩俱乐部和马丁佩纳海峡的社区组织。',
					id: 20180119
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
