<template>
    <div class="newspage">
        <nav-bar :arr="arr" :imgSrc="imgSrc" :flag="flag"></nav-bar>
        <text-head :imgUrl="videoUrl" :text="text" :title="title"></text-head>
        <text-bar :items="items" @selectPgs="selectPgs" class="text-bar"></text-bar>
        <pagination :pgs="selPgs" :flag="flag" @changeFlag="changeFlag" @setSession="setSession"></pagination>
        <foot class="foot"></foot>
    </div>
</template>

<script>
	import NavBar from '../../../components/pc/NavBar'
	import lessBar from '../../../components/pc/lessBar'
	import footer from '../../../components/pc/footer'
	import pagination from '../../../components/pc/news/pagination'
	import textHead from '../../../components/pc/textHead'
	import pgs from './article.json'

export default {
    name: 'News',
    components: {
        'nav-bar': NavBar,
        'text-head': textHead,
        'text-bar': lessBar,
        'foot': footer,
        'pagination': pagination
    },
    data: function () {

        return{
            items: [{text: "全部",checked:true,index:0},
                    {text: "科技",checked:false,index:1},
                    {text: "全球化",checked:false,index:2},
                    {text: "社会责任",checked:false,index:3},
                    {text: "政府合作",checked:false,index:4},
                    {text: "品牌营销",checked:false,index:5},
                    {text: "大数据",checked:false,index:6}],
            arr: [{title:'首页',checked:false,index:0},{title:'新闻',checked:true,index:1},{title:'关于',checked:false,index:2},{title:'商业合作',checked:false,index:3}],
            imgSrc: 2,
            flag: true,
            pgs: pgs,
            selPgs: pgs,
            flag: 1,
            videoUrl: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/new.png',
            title: '新闻动态',
            text: '全球领先的“无桩单车共享”模式，让世界没有陌生的角落'
        }
    },
    created() {
         this.menu();  
         this.checkWhichKind(this.items);
      },
    methods: {
		selectPgs(idx) {
			this.flag = 0;
			this.selPgs = [];
			if(!idx || idx==0) {
			this.selPgs = this.pgs;
			} else {
			for(var i=0; i<pgs.length; i++) {
				if(pgs[i].kind.type == idx) {
				this.selPgs.push(pgs[i]);
				}
			}
			}
			return this.selPgs;
		},
		changeFlag() {
			this.flag = 1;
		},
		menu() {
			window.scrollTo(0, 0);
		},
		setSession(current) {
			let whichKind = 0; 
			for(var i=0; i<this.items.length; i++) {
			if(this.items[i].checked) {
				whichKind = i;
				sessionStorage.setItem("savedWhichKind", whichKind);
				break;
			}
			}
			sessionStorage.setItem("savedCurrentPage", current);
		},
		checkWhichKind(items) {
			if(sessionStorage['savedWhichKind']) {
			this.selectPgs(parseInt(sessionStorage['savedWhichKind']));
			for (var i = 0; i < items.length; i++) {
					items[i].checked = false;
				}
			items[parseInt(sessionStorage['savedWhichKind'])].checked = true;
			}
		}
    }
}
    var reg = /.*news$/;
		if(reg.test(window.location.href)) {
			sessionStorage['savedWhichKind'] = '';
			sessionStorage['savedCurrentPage'] = '';
		}
</script>

<style scoped>
	.newspage .foot {
		margin-top: 40px;
	}
	.newspage .text-bar {
		position: relative;
		z-index: 200;
  	}
</style>
