// 本文件由FirstUI授权予安徽理工大学（会员ID：  40 34，营业执照号：  1234  0 0 004  8     531   995 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
class RequestTaskStore {
	constructor(taskList = []) {
		this.taskStore = taskList
	}
	setRequestTaskStore(taskArr, taskKey) {
		taskKey && taskArr.push(taskKey)
		this.taskStore = taskArr;
	}
	removeRequestTask(task) {
		if (!task) return;
		const taskKey = this.getRequestTask(task)
		let taskArr = [...this.taskStore]
		const index = taskArr.indexOf(taskKey)
		if (~index) {
			taskArr.splice(index, 1)
			this.setRequestTaskStore(taskArr)
		}
	}
	getRequestTask(task) {
		let {
			url,
			method,
			keys,
			data
		} = task;
		keys = keys || []
		data = typeof data === 'string' ? JSON.parse(data) : data;
		let taskArr = [];
		for (let key in data) {
			if (data.hasOwnProperty(key) && !~keys.indexOf(key)) {
				let value = data[key] === null ? '' : data[key];
				taskArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
			}
		}
		return url + method + taskArr.join('');
	}
	requestTaskStore(task) {
		let result = false;
		if (!task) return result;
		const taskKey = this.getRequestTask(task)
		let taskArr = [...this.taskStore]
		if (taskArr.length > 0) {
			if (~taskArr.indexOf(taskKey)) {
				result = true;
			} else {
				this.setRequestTaskStore(taskArr, taskKey)
			}
		} else {
			taskKey && this.setRequestTaskStore(taskArr, taskKey)
		}
		return result;
	}
}
export default function createTaskStore(taskList = []) {
	return new RequestTaskStore(taskList)
}