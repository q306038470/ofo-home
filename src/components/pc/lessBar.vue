<template>
    <div class="contain">
		<ul class="wrapper">
			<li v-for="item in items">
				<span :class="[item.checked ? 'check' : '']"  @click="check(item,items)"> {{ item.text }} </span>
			</li>
		</ul>
    </div>
</template>

<script>
	export default {
		name: 'textBar',
		props: ['items'],
		data: function () {
		return {
		}
		},
		methods: {
			check (item,items) {
				window.scrollTo(0, 0);
				for (var i = 0; i < items.length; i++) {
				items[i].checked = false;
				}
				items[item.index].checked = true;
				this.$emit('selectPgs', item.index);
			},
			checkSelected (items) {
				if(sessionStorage['savedWhichKind']) {
					for (var i = 0; i < items.length; i++) {
					items[i].checked = false;
					}
					items[parseInt(sessionStorage['savedWhichKind'])].checked = true;
				}
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
		float: left;
	} 
	.contain {
		position: relative;
		width: 100vw;
		height: 6.2vw;
		border-bottom: 1px solid rgba(0,0,0,.1);
		margin-top: 5vw;
		z-index: 102;
	}
	ul li {
		cursor: pointer;
	}
	.contain .wrapper {
		float: none;
		width: 78.3vw;
		height: 100%;
		margin: 0 auto 0 auto;
		padding-left:1.4vw;
	}
	span{
		width: 10.97vw;
		height: 6.16vw;
		background-color:  #ffffff;
		line-height: 6.16vw;
		opacity: 0.5;
		font-family: PingFangSC-Regular;
		font-size: 1vw;
		color: #000000;
		text-align: center;
	}
	.check {
		width: 11vw;
		height: 6.16vw;
		background-color:  #FFD900;
		line-height: 6.16vw;
		opacity: 1;
		font-family: PingFangSC-Regular;
		font-size: 1vw;
		color: #000000;
	}
</style>
