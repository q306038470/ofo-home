<template>
    <div class="wrap" style="width: 100%; height: 100%; margin: 0 auto;">
        <div class="content">
			<nav-bar class="navbar" :arr="arr" :imgSrc="imgSrc" :flag="flag"></nav-bar>
			<div class="news-content">
				<p class="time">{{time}}</p>
				<p class="title">{{title}}</p>
				<div class="text" v-html="article">{{article}}</div>
			</div>
			<foot class="footer"></foot>
      	</div>
    </div>
</template>

<script>
    import NavBar from '../../../components/pc/NavBar';
    import foot from '../../../components/pc/footer';
    import pg from './article.json';

    export default {
		name: 'NewsDetail',
		data() {
			return {
			arr: [{title:'首页',checked:false,index:0},{title:'新闻',checked:true,index:1},{title:'关于',checked:false,index:2},{title:'商业合作',checked:false,index:3}],
			// imgSrc: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_2.svg',
			imgSrc: 2,
			flag: true,
			pg: pg

			}
		},
		components: {
			'nav-bar': NavBar,
			'foot': foot
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
		created(){
			window.scrollTo(0, 0);
		}
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        font-family: "PingFangSC-Regular","myfont", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "STHeitiSC-Light", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        -webkit-overflow-scrolling: touch;
    }
    body{
        width:100%;
        height:100%;
        max-width:100vw

    }
    .wrap {
		.content {
			width: 100vw;
			height: 100%;
		}
		.content .time {
			width: 66.7vw;;
          	margin: 0 auto;
			text-align:left;
			font-size: 1vw;
			color: #A0A0A0;
		}
		.news-content {
			position: relative;
			top: 7.9vw;
		}
		.content .news-content .title {
			width: 66.7vw;
			margin: 0 auto 40px auto;
			font-size: 2vw;
			color: #3E3A39;
			font-family: PingFangSC-Semibold;
			font-weight: 700;
		}
		.content .footer {
			top: 7.9vw;
		}
		.news-content .text p {
			font-family: PingFangSC-Regular;
			font-size: 1vw;
			color: #3E3A39;
			width: 66.7vw;
			margin: 40px auto;
		}
		.news-content .text img {
			display: block;
			width: 66.7vw;
			margin: 0px auto;
		}
    }
</style>
