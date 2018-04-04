<template>
  <div class="news-detail">
    <nav-bar :values="values"></nav-bar>
    <div class="mobile-news-content">
		<h1 class="title">{{title}}</h1>
		<p class="time">{{time}}</p>
		<div class="text" v-html="article">{{article}}</div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
    import navBar from '../../../components/mobile/nav-bar';
    import foot from '../../../components/mobile/foot';
    import pg from './article.json';

    export default {
		name: "MobileNewsDetail",
		data() {
			return {
			values: [{text: "首页", index: 0, checked: false, flag: true, url: "main"},
				{text: "新闻", index: 1, checked: true, flag: true, url: "news"},
				{text: "关于", index: 2, checked: false, flag: false, url: "about"},
				{text: "商业合作", index: 3, checked: false, flag: false}],
			isClicked: true,
			isLast: true,
			pg: pg
			}
		},
		components: {
			"nav-bar": navBar,
			"foot": foot,
		},
		computed: {
			article() {
				let article = '';
				this.pg.forEach(v => {
					if (v.id == this.$route.query.titleId) {
						article = v.article
					} 
				});
				return article//this.pg[this.$route.query.titleId - 1].article;
			},
			title() {
				let title = '';
				this.pg.forEach(v => {
					if (v.id == this.$route.query.titleId) {
						title = v.title
					} 
				});
				return title//this.pg[this.$route.query.titleId - 1].title;
			},
			time() {
				let time = '';
				this.pg.forEach(v => {
					if (v.id == this.$route.query.titleId) {
						time = v.time
					} 
				});
				return time//this.pg[this.$route.query.titleId - 1].time;
			}
		},
		methods: {
			menu() {
				window.scrollTo(0,0);
			}
		},
		created() {
			this.menu();
		}
    }



</script>

<style lang="scss">
 	 @import '../../../style/rem.scss';
	.news-detail {
		.mobile-news-content {
			width: 100vw;
			height: auto;
			display: block;
			overflow: hidden;  
		}
		.mobile-news-content .title {
			width: rem(339);
			margin: rem(18) auto rem(4) auto;
			font-family: PingFangSC-Semibold;
			font-weight: 700;
			font-size: rem(18);
			color: #3E3A39;
		}
		.mobile-news-content .time {
			width: rem(339);
			height: rem(17.5);
			margin: 0 auto;
			text-align: left;
			font-size: rem(13);
			font-family: PingFangSC-Regular;
			color: #A0A0A0 ;   
		}
		.text{
			margin-top: rem(8);
		}
		.mobile-news-content .text p {
			width:rem(339);
			color: #3E3A39;
			margin: rem(18) auto 0 auto;   
			font-size:rem(15);
			line-height: rem(24);
			text-align: justify;
		}
		.mobile-news-content .text img {
			width: rem(339);
			display: block;
			margin: rem(18) auto rem(18) auto;
		}
		.foot {
			margin-top: rem(19);
		}
  	}
</style>
