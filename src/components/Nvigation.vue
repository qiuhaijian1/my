<template>
<div>
	<el-container>
		<el-header>
			<div class="header">
			<h3 class="header_p">ICMSS管理WEB</h3>	 
			<div class="header_div_2"><el-button class="header_div_2_btn" @click="goindex" plain  size="mini">ログアウト</el-button></div>
			<div class="header_div_1"><p><i class="el-icon-user-solid"></i>ようこそ：<span>{{msg}}</span>さん</p></div>		
			</div>
		</el-header>
		<div>
			 <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#00B1AE" router>
			  <el-menu-item index="/Home">&nbsp&nbsp&nbsp<span class="menu_span">所属管理</span></el-menu-item>
			  <el-menu-item index="/IDList">&nbsp&nbsp<span class="menu_span">ログインID管理</span></el-menu-item>
			  <el-menu-item  disabled>&nbsp&nbsp<span class="menu_span">アンイート管理</span></el-menu-item>				
			</el-menu>
		</div>

	
	</el-container>
</div>
</template>
<script>

	  export default {
	  created() {
	 	 this.msg = this.$route.query.name
				},
		  methods: {
			goindex(){this.$router.replace('/')}
			}
		}
</script>
<style>
	.el-container{
		min-width:800px;
	}
	.header{
		height:100%;
		margin-left:-20px;
		margin-right:-20px;
		background-color:#00B1AE;
		color:#fff;
	}
	.header_p{
		float:left;
		font-size:18px;	
		margin-left:20px;
	}
	.header_div_1{
		float:right;

	}
	.header_div_2{
		float:right;
		margin-top:14px;
		margin-left:10px;
		margin-right:10px;
		border-radius:10px;
	}
	.header_div_2_btn{
		background-color:#fff;	
		z-index:999;
	}
	.menu_span{
		font-size:15px;
	}
	


</style>
