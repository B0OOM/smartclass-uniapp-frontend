<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40  34，营业执照号：1   23 4 000 048 5 31     99   59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view v-if="type==='custom'">
			<fui-result :type="type" :title="title" :descr="descr">
				<template v-slot:icon>
					<fui-icon name="warning"  color="#FF2B2B" :size="128"></fui-icon>
				</template>
				<fui-button btn-size="medium" text="主要操作" :type="btnType" bold :margin="['48rpx','0','24rpx']">
				</fui-button>
				<fui-button btn-size="medium" text="次要操作" type="gray" :color="color" bold></fui-button>
			</fui-result>
		</view>
		<view v-else>
			<fui-result :type="type" :title="title" :descr="descr">
				<fui-button btn-size="medium" text="主要操作" :type="btnType" bold :margin="['48rpx','0','24rpx']">
				</fui-button>
				<fui-button btn-size="medium" text="次要操作" type="gray" :color="color" bold></fui-button>
			</fui-result>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'success',
				btnType: 'success',
				color: '#09BE4F',
				title: '操作成功',
				descr: 'Result 结果页，在页面中组织图标、文字等内容，向用户反馈操作结果'
			}
		},
		onLoad(e) {
			let type = Number(e.type || 1)
			this.title = ['操作成功', '操作失败', '操作失败', '正在审核', '操作标题'][type - 1]
			this.type = ['success', 'warning', 'fail', 'waiting', 'custom'][type - 1]
			this.btnType = ['success', 'warning', 'primary', 'primary', 'danger'][type - 1]
			this.color = ['#09BE4F', '#FFB703', '#465CFF', '#465CFF', '#FF2B2B'][type - 1]
		},
		methods: {

		}
	}
</script>

<style>

</style>