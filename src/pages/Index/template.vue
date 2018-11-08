<template>
	<div id="index">
		<h1>首页</h1>
		<el-button type="primary" @click="onclick">主要按钮</el-button>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<el-slider v-model="value1"></el-slider>
	</div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>