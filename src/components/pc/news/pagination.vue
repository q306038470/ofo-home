<template>
    <div class="news-content1">
		<div class="news">
				<div v-for="pg in goto(current)" class="news-item" @click="goDetail(pg.id)">
					<per-new :pg="pg" class="per-news"></per-new>
				</div>
		</div>
			<div class="pagination" v-if="pgs.length>showItem">
				<ul>
					<li v-show="current != 1" @click="prev()" ><a href="javascript:void(0)">&lt&lt上一页</a></li>
					<li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
						<a href="javascript:void(0)" >{{index}}</a>
					</li>
					<li v-show="allpage != current && allpage != 0 " @click="next()"><a href="javascript:void(0)" >下一页&gt&gt</a></li>
				</ul>	
			</div>
    </div>
</template>

<script>
	import Pernew from './PerNew'
	import NewsDetail from '../../../pages/pc/news/newsDetail'

	export default {
		name: "pagination",
		props: ['pgs', 'flag'],
		data: function () {
		return {
			showItem: 9,
			showPage: 3,
			current: 1
		}
	},
    computed: {
		allpage() {
        	return Math.ceil(this.pgs.length / this.showItem);
      	}, 
		pages() {
			var pag = [];
			if(this.current < this.showPage){ //如果当前的激活的项 小于要显示的条数
			//总页数和要显示的条数那个大就显示多少条
				var i = Math.min(this.showPage, this.allpage);
				while(i){
					pag.unshift(i--);
				}
			} else { //当前页数大于显示页数了
				var middle = this.current - Math.floor(this.showPage / 2 ),//从哪里开始
					i = this.showPage;
				if(middle >  (this.allpage - this.showPage)){
					middle = (this.allpage - this.showPage) + 1
				}
				while(i--){
					pag.push( middle++ );
				}
			}
			return pag
        }
    },
    methods: {
    	getData(start, stop) {
        	// TODO 判断 start, stop 大小关系
        	return this.pgs.slice(start, stop);
      	},
      	next() {
        	return this.goto(this.current * this.showItem <= this.pgs.length - 1 ? this.current + 1 : 0);
      	},
      	prev() {
        	return this.goto(this.current * this.showItem >= 1 ? this.current - 1 : this.pgs.length - 1);
      	},
      	goto(pageno = 1) {
        	window.scrollTo(0, 0);
			if(this.flag==0) {
				this.current = 1;
				this.$emit('changeFlag');
			} else {
				this.current = pageno <= 0 ? 1 : pageno;
			}
			const _tureno = this.current - 1;
			return this.getData(_tureno * this.showItem, (_tureno + 1 ) * this.showItem);
      	},
		goDetail(idx) {
			this.$emit('setSession', this.current);
			this.$router.push({path: '/news/detail', query: {titleId: idx}});
		},
		checkSessionStorage() {
			if(sessionStorage['savedCurrentPage']) {
			this.current = parseInt(sessionStorage['savedCurrentPage']);
			} else {
			this.current = 1;
			}
		}


    },
    components: {
    	'per-new': Pernew
    },
    mounted() {
      	this.checkSessionStorage();
    }
}
</script>

<style scoped>
	.news-content1 {
		width: 100vw;
		position: relative;
	}
	.news {
		width: 80vw;
		margin: 0 auto 40px auto;
		display: flex;
		-webkit-display: flex;
		-o-display: flex;
		-ms-display: flex;
		-moz-display: flex;
		flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		justify-content: left;
		-webkit-justify-content: left;
		-moz-justify-content: left;
		-o-justify-content: left;
		-ms-justify-content: left;
		overflow:hidden;
	}
	.news .per-news {
		cursor: pointer;
	}
	.pagination {
		width: 100vw;
		text-align: center;
		height: 30px;
	}
	.pagination ul {
		display: inline-block;
		margin: 0 auto 40px auto;
	}
	.pagination li{
		float: left;
		margin-left: 10px;
	}
	.pagination li a {
		font-size: 18px;
		color: #A0A0A0;
	}
	.pagination .active a {
		color: #3E3A39;
	}
</style>
