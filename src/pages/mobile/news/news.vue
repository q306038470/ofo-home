<template>
	<div class="new-pages" v-title data-title="ofo-新闻">
		<nav-bar :values="values"></nav-bar>
		<nav-head :items="items" :page="page"  @selectPgs="selectPgs"></nav-head>
		<load-more :pgs="selPgs" :flag="flag" class="news-items" ref="loadMore"></load-more>
		<foot :class="[selPgs.length==0 ? 'fix-foot' : '']"></foot>
	</div>
</template>

<script>
	import navBar from '../../../components/mobile/nav-bar';
	import Foot from '../../../components/mobile/foot';
	import navHead from '../../../components/mobile/nav-head';
	import loadMore from '../../../components/mobile/loadMore'

	import pgs from './article.json'

	export default {
		name: 'MobileNews',
		data() {
			return {
				values: [{text: "首页", index: 0, checked: false, flag: true, url: "main"},
				{text: "新闻", index: 1, checked: true, flag: true, url: "news"},
				{text: "关于", index: 2, checked: false, flag: false, url: "about"},
				{text: "商业合作", index: 3, checked: false, flag: false}],
				items: [{text: "全部",checked:true,index:0},
				{text: "科技",checked:false,index:1},
				{text: "全球化",checked:false,index:2},
				{text: "社会责任",checked:false,index:3},
				{text: "政府合作",checked:false,index:4},
				{text: "品牌营销",checked:false,index:5},
				{text: "大数据",checked:false,index:6}
				],
				pgs: pgs,
				selPgs: pgs,
				page: 2
			}
		},
		components: {
			"nav-bar": navBar,
			"foot": Foot,
			"nav-head": navHead,
			"load-more": loadMore
		},
		methods: {
			selectPgs(idx) {
				this.flag = 0;
				this.selPgs = [];
				if(idx==0) {
				this.selPgs = this.pgs;
				} else {
					for(var i=0; i<pgs.length; i++) {
						if(pgs[i].kind.type == idx) {
							this.selPgs.push(pgs[i]);
						}
					}
				}
				return;
			}
		},
    created() {
      	this.selectPgs(window.checkItem.a);
    }
  }
</script>

<style scoped>
	.new-pages .fix-foot {
		position: fixed !important;
		bottom: 0 !important;
	}
</style>
