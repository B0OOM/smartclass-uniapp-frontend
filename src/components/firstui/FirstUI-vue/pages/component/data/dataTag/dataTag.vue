<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  40 34，营业执照号：  123400 0  04 85   31 9  95    9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center fui-rect" @tap="vip">DataTag <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc fui-rect">DataTag 标签选择，通过数据驱动的单选标签和复选标签。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">单选标签</view>
			<fui-data-tag :options="options" @change="change"></fui-data-tag>
			<view class="fui-section__title">单选标签/设置默认值/背景/边框</view>
			<!--默认值vue2 使用value，vue3使用modelValue。建议使用v-model方式-->
			<fui-data-tag defaultBorderColor="#FBDA41" background="#F1F4FA" activeBgColor="#FEDF48"
				border-color="#FBDA41" active-color="#333" radius="20" :value="defVal" :modelValue="defVal"
				:options="options" @change="change"></fui-data-tag>
			<view class="fui-section__title">复选标签/带角标</view>
			<fui-data-tag multiple mark :options="options" @change="change2"></fui-data-tag>
			<view class="fui-section__title">复选标签/设置默认值</view>
			<fui-data-tag multiple mark :options="options" :value="chkDefVal" :modelValue="chkDefVal" @change="change2">
			</fui-data-tag>
			<view class="fui-section__title">单选标签/v-model/可全部取消</view>
			<fui-data-tag :min="0" :options="options" v-model="val"></fui-data-tag>
			<view class="fui-section__title">多选标签/v-model/min/max/圆角值</view>
			<fui-data-tag multiple :multiple-min="1" :max="2" :radius="40" activeBgColor="#F1F4FA" :options="options"
				v-model="vals">
			</fui-data-tag>
			<view class="fui-section__title">单选标签/带角标/调整颜色/默认值</view>
			<fui-data-tag :options="options" v-model="val2" width="180" activeColor="#FFB703" borderColor="#FFB703" mark
				markColor="#FFB703"></fui-data-tag>
			<view class="fui-section__title">复选标签/与全选标签互斥</view>
			<fui-data-tag multiple mark :options="options2" @change="change2">
			</fui-data-tag>
		</view>
	</view>
</template>

<script>
	export default {
		watch: {
			val(newVal) {
				if (newVal) {
					this.fui.toast(newVal)
				} else {
					this.fui.toast('已全部取消')
				}
			},
			vals(newVal) {
				if (newVal.length > 0) {
					this.fui.toast(newVal.join(','))
				} else {
					this.fui.toast('已全部取消')
				}
			}
		},
		data() {
			return {
				options: ['选项一', '选项二', '选项三', '选项四'],
				defVal: '选项二',
				chkDefVal: ['选项二', '选项三'],
				val: '',
				vals: [],
				val2: '选项三',
				//isAll仅可设置一个为true
				options2: [{
					text: '全部',
					value: '-99',
					isAll: true
				}, {
					text: '选项一',
					value: '1',
					//以下为扩展参数
					id: 1,
					param: 3
				}, {
					text: '选项二',
					value: '2',
					//扩展参数
					id: 2,
					param: 4
				}, {
					text: '选项三',
					value: '3',
					//扩展参数
					id: 3,
					param: 5
				}]
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			change(e) {
				console.log(e.detail)
				this.fui.toast(e.detail.value)
			},
			change2(e) {
				console.log(e.detail)
				let arr = e.detail.value || []
				if (arr.length > 0) {
					this.fui.toast(arr.join(','))
				} else {
					this.fui.toast('已全部取消')
				}
			}
		}
	}
</script>

<style>
	.fui-wrap {
		background-color: #F1F4FA;
		padding-bottom: 64rpx;
	}
</style>