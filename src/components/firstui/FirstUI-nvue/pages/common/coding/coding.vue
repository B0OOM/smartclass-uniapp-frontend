<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4  034，营业执照号：12     340    000 48 531  99    59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-content__box">
			<view class="fui-img__box">
				<image :src="`${resUrl}/common/img_coding_3x.png`" class="fui-img" mode="widthFix"></image>
			</view>
			<view class="fui-title">开发中</view>
			<view class="fui-sub__title">功能开发中，敬请期待！</view>
			<view class="fui-btn__box">
				<fui-button text="返回首页" :size="28" width="336rpx" height="84rpx" radius="100rpx" background="#fff" borderColor="#465CFF" color="#465CFF" @click="goIndex"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resUrl:this.fui.resUrl()
			}
		},
		methods: {
			goIndex(){
				this.fui.href('/pages/tabbar/index/index',true)
			}
		}
	}
</script>

<style>
page{
	background-color: #fff;
	font-weight: normal;
}
.fui-content__box{
	width: 100%;
	position: fixed;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}
.fui-img__box{
	width: 100%;
	height: 320rpx;
	padding: 0 87rpx;
	box-sizing: border-box;
}
.fui-img{
	width: 100%;
	height: 318rpx;
	display: block;
}
.fui-title{
	text-align: center;
	font-weight: 500;
	color: #333333;
	padding-top: 48rpx;
}
.fui-sub__title{
	text-align: center;
	font-size: 24rpx;
	font-weight: 400;
	color: #B2B2B2;
	padding-top: 8rpx;
}
.fui-btn__box{
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 64rpx;
}
</style>