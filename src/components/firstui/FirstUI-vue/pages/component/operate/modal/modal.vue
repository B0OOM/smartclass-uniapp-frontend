<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  403 4，营业执照号： 123 4   0 0 00 4     8 5  3199 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Modal <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Modal 模态框，在浮层中显示，引导用户进行相关操作。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="基础使用" bold :margin="['24rpx']"
				@click="showModal(1)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="单个按钮" bold @click="showModal(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="多个按钮" bold :margin="['24rpx']"
				@click="showModal(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="设置按钮圆角" bold @click="showModal(4)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="点遮罩可关闭" bold :margin="['24rpx']"
				@click="showModal(5)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="自定义内容" bold @click="showModal(6)">
			</fui-button>
		</view>
		<!--type=1-->
		<fui-modal :show="show" title="提示" descr="确定关注 FirstUI 吗？" @click="onClick"></fui-modal>
		<!--type=2~5-->
		<fui-modal :show="show2" :descr="descr" :buttons="buttons" :radius="radius" :maskClosable="maskClosable"
			:direction="direction" @click="onClick2" @cancel="onCancel2"></fui-modal>
		<!--type=6-->
		<fui-modal :buttons="[]" width="600" :show="show3">
			<fui-icon name="checkbox-fill" :size="108" color="#09BE4F"></fui-icon>
			<text class="fui-title">购买成功</text>
			<text class="fui-descr">成功购买一张月卡，可免费阅读30天</text>
			<fui-button text="我知道了" width="240rpx" height="72rpx" :size="28" radius="36rpx" background="#FFB703"
				borderWidth="0" :margin="['0','0','24rpx']" @click="onCancel3">
			</fui-button>
			<view class="fui-icon__close" @tap="onCancel3">
				<fui-icon name="close" color="#B2B2B2" :size="48"></fui-icon>
			</view>
		</fui-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				buttons: [],
				radius: 16,
				maskClosable: false,
				descr: '',
				direction: 'row',
				show2: false,
				show3: false
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			showModal(type) {
				this.radius = 16
				this.maskClosable = false;
				this.buttons = []
				this.direction = 'row'
				switch (type) {
					case 1:
						this.show = true;
						break;
					case 2:
						this.descr = '您还未登录，请先登录'
						this.buttons = ['确定']
						this.show2 = true;
						break;
					case 3:
						this.descr = '请选择您的身份'
						this.direction = 'column'
						this.buttons = [{
							text: '开发者'
						}, {
							text: '运营人员',
							background: '#FFB703'
						}, {
							text: '管理员',
							background: '#FF2B2B'
						}]
						this.show2 = true;
						break;
					case 4:
						this.radius = 80;
						this.descr = '是否将此次编辑保留？'
						this.buttons = [{
							text: '不保留',
							plain: true,
							color: '#FFB703',
							background: '#FFB703'
						}, {
							text: '保留',
							background: '#FFB703'
						}]
						this.show2 = true;
						break;
					case 5:
						this.maskClosable = true
						this.descr = '是否将此次编辑保留？'
						this.buttons = [{
							text: '不保留',
							plain: true,
							color: '#FF2B2B',
							background: '#FF2B2B'
						}, {
							text: '保留',
							background: '#FF2B2B'
						}]
						this.show2 = true;
						break;
					case 6:
						this.show3 = true;
						break;
					default:
						break;
				}
			},
			onClick(e) {
				console.log(e)
				this.fui.toast(`您点击了${e.text}`)
				//...
				this.show = false
			},
			onClick2(e) {
				console.log(e)
				//...
				this.onCancel2()
			},
			onCancel2(e) {
				this.show2 = false
			},
			onCancel3(e) {
				this.show3 = false
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-title {
		font-size: 32rpx;
		padding-top: 24rpx;
	}

	.fui-descr {
		font-size: 24rpx;
		color: #B2B2B2;
		padding-top: 12rpx;
		padding-bottom: 48rpx;
	}

	.fui-icon__close {
		position: absolute;
		right: 24rpx;
		top: 20rpx;
	}
</style>