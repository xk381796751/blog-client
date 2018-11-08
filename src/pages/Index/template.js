export default {
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods: {
		onclick() {
			this.$alert('这是一段内容', '标题名称', {
				confirmButtonText: '确定',
				callback: action => {
					this.$message({
						type: 'info',
						message: `action: ${action}`
					});
				}
			});
		}
	}
}