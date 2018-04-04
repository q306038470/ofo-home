<template>
    <div class="play-list">
        <div class="video-wrapper" :key="index" v-for="(item, index) of videos" @click="goPlay(item,videos)">
            <img :src="item.url" alt="">
            <div class="video-poster">
                <p class="title" :class="item.className">{{item.title}}</p>
                <div class="clickon">
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
            <video id="my-video" :src="item.src" v-if="item.isCurMp4" controls></video>
        </div>
    </div>
</template>

<script>
	export default {
		name: "video-wrapper",
		data() {
			return {};
		},
		props: ["videos"],
		methods: {
			goPlay(item,items){
				window.addEventListener('devicelight', function(event) {
					event.value = 500;
					console.log(event.value + 'lux');
				});
				for(var i = 0; i < items.length; i++){
					items[i].isCurMp4 = false;
				}
				items[item.index].isCurMp4 = true;
				setTimeout(function(){
						const myVideo = document.getElementById('my-video');
						myVideo.play();
						myVideo.onabort = function() {
							items[item.index].isCurMp4 = false;
						}
				},0);
			}
		}
	};
</script>


<style lang="scss" scoped>
	@import "../../style/rem.scss";

	.play-list {
		position: relative;
		margin-top: rem(18);
		.video-wrapper {
			overflow: hidden;
			position: relative;
			margin: rem(18) auto 0 auto;
			width: rem(339);
			height: rem(169.5);
			color: #ffffff;
			img {
			width: rem(339);
			height: rem(169.5);
			}
			.video-poster {
				position: absolute;
				top: 0;
				width: rem(339);
				height: rem(169.5);
				background-color:rgba(0,0,0,0.6);  
				.title {
					font-family: PingFangSC-Semibold;
					font-weight: 700;
					font-size: rem(24);
					height: rem(33.5);
					line-height: rem(33.5);
					font-weight: 700;
				}
				.title1 {
					margin-top: rem(54);
					margin-left: rem(90.5);
				}
				.title2 {
					margin-left: rem(103);
					margin-top: rem(54);
				}
				.title3 {
					margin-top: rem(54.5);
					margin-left: rem(54.5);
				}
				.clickon {
					margin-top: rem(10);
					margin-left: rem(119.5);
					font-family: PingFangSC-Medium;
					font-size: rem(13);
					height: rem(18.5);
					span {
					height: rem(18.5);
					position: relative;
					line-height: rem(18.5);
					top: rem(-3);
					
					}
				}
			}

			video{
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: rem(339);
				height: rem(169.5);
				z-index: 1;
			}
		}
	}
</style>
