<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40  34，营业执照号：1  2 3 40 00  0485 3  1   99 59   Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Animation</view>
			<view class="fui-page__desc">Animation 动画，过渡效果。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<fui-button type="gray" btn-size="medium" text="Fade" bold :margin="['24rpx']"
				@click="ani(['fade'], true)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="Slide Top" bold @click="ani(['slide-top'])">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="Slide Left" bold :margin="['24rpx']"
				@click="ani(['slide-left'])">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="Slide Right" bold @click="ani(['slide-right'])">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="Slide Bottom" bold :margin="['24rpx']"
				@click="ani(['slide-bottom'])">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="Zoom In" bold @click="ani(['zoom-in', 'fade'])">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="Zoom Out" bold :margin="['24rpx']"
				@click="ani(['zoom-out', 'fade'])"></fui-button>
			<fui-button type="gray" btn-size="medium" text="Custom" bold
				@click="ani(['slide-left','slide-top','fade'])"></fui-button>
		</view>
		<fui-animation :duration="500" :animationType="mode" :styles="styles" :show="show" @click="handleClick"
			@change="change">
			<view class="fui-ani__box fui-flex__center">transition</view>
		</fui-animation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: ['fade'],
				styles: {}
			}
		},
		methods: {
			ani(mode, mask) {
				if (mask) {
					this.$set(this.styles, 'backgroundColor', 'rgba(0,0,0,0.6)');
				} else {
					this.$set(this.styles, 'backgroundColor', 'rgba(0,0,0,0)');
				}
				setTimeout(() => {
					this.mode = mode;
					this.show = !this.show;
				}, 80);
			},
			handleClick() {
				this.show = false;
			},
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.fui-ani__box{
		width: 240rpx;
		height: 240rpx;
		background-color: #6831FF;
		color: #FFFFFF;
	}
</style>