<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号： 12 3  4   0  000 4 8 53 1 995  9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Icon</view>
			<view class="fui-page__desc">Icon 图标，First UI字体图标库，可自行扩展。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<fui-grid :columns="3" @click="getName">
				<fui-grid-item v-for="(item, index) in icons" :highlight="item!=''" :index="index" :key="index">
					<view class="fui-icon__item">
						<fui-icon :name="item"></fui-icon>
						<text class="fui-icon__name">{{ item }}</text>
					</view>
				</fui-grid-item>
			</fui-grid>
		</view>
	</view>
</template>

<script>
	// #ifdef MP-BAIDU
	import {
		mapState
	} from 'vuex'
	// #endif
	import icons from './icon.js';
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				icons: icons
			}
		},
		// #ifdef MP-BAIDU
		computed: mapState(['status']),
		// #endif
		methods: {
			getName(e) {
				const name = this.icons[e.detail.index]
				if (!name) return;
				// #ifdef MP-BAIDU
				if (this.status == 1) {
					$fui.getClipboardData(name, res => {
						this.fui.toast('图标名称复制成功');
					}, e);
				}
				// #endif

				// #ifndef MP-BAIDU
				$fui.getClipboardData(name, res => {
					this.fui.toast('图标名称复制成功');
				}, e);
				// #endif
			}
		}
	}
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: 'fuiFont';
		src: url("~@/components/firstui/fui-icon/fui-icon.ttf") format("truetype");
	}

	/* #endif */
	page {
		background-color: #FFFFFF;
	}

	.fui-icon__item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.fui-icon__name {
		font-size: 28rpx;
		font-weight: 400;
		padding-top: 16rpx;
	}
</style>