// 本文件由FirstUI授权予安徽理工大学（会员ID：4 0  34，营业执照号：1       234 000 0  4 8 5319 9 5  9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifndef APP-PLUS || MP-WEIXIN || H5
export default {
	data() {
		return {
			transform: '',
			transformSlot: '',
			startX: 0,
			lastLeft: 0,
			resetAni: false
		}
	},
	watch: {
		resetNum(val) {
			this.startX = 0;
			this.lastLeft = 0;
			this.styleChange(0)
		}
	},
	methods: {
		getSlipDistance(left) {
			let width = this.w - this.x - 44
			let distance = left / (this.w - (this.sliderH * 2)) * width
			return distance > width ? width : distance
		},
		styleChange(left) {
			if (left == 0) {
				this.resetAni = true
			} else {
				this.resetAni = false
			}
			let slotLeft = this.getSlipDistance(left)
			this.transformSlot = 'translate3d(' + slotLeft + 'px,0,0)'
			this.transform = 'translate3d(' + left + 'px,0,0)'
		},
		touchstart(e) {
			let touch = e.touches[0] || e.changedTouches[0];
			this.startX = touch.clientX
		},
		touchmove(e) {
			if (this.isPass || this.disabled || !this.slotSrc || !this.isShow) return;
			let touch = e.touches[0] || e.changedTouches[0]
			let pageX = touch.clientX;
			let left = pageX - this.startX + this.lastLeft;
			left = left < 0 ? 0 : left;
			let width = this.w - (this.sliderH * 2);
			left = left >= width ? width : left;
			this.startX = pageX
			this.lastLeft = left
			this.styleChange(left)
		},
		touchend(e) {
			if (this.isPass || this.disabled || !this.slotSrc || !this.isShow) return;
			//前端验证
			let slotLeft = this.getSlipDistance(this.lastLeft)
			if (this.type == 1) {
				let width = this.x1 - this.x
				if (Math.abs(slotLeft - width) <= this.range) {
					this.disabled = true
					this.success()
				} else {
					this.startX = 0;
					this.lastLeft = 0;
					this.disabled = false;
					this.styleChange(0)
					this.fail()
				}
			} else {
				//后端验证
				this.verify({
					slip: slotLeft
				})
			}
		}
	}
}

// #endif

// #ifdef APP-PLUS|| MP-WEIXIN || H5
export default {}
// #endif