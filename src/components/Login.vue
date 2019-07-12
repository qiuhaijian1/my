<template>
    <el-container>
		<div class="el_card">
			<div class="el-card__header">
				<p class="sys_name">ICMSS管理WEBログイン</p>
			</div>
			<div class="el-card__body">
				<el-form :model="form">
					<el-form-item label="ログインID"  v-model="ID">
						<el-input type="text" v-model="form.ID"></el-input>
					</el-form-item>
					<el-form-item label="パスワード" >
						<el-input type="password" v-model="form.password"></el-input>
					</el-form-item>
					<el-form-item>
						  <el-button class="login_btn" @click="login(ID)" type="primary">ログイン</el-button>
					 </el-form-item>
				</el-form>
			</div>
		</div>
  </el-container>
</template>

<script>
export default {
 
  data () {
    return {
      form: {}
	
    }
  },
  methods: {
		login (ID) {
			if (!this.form.ID) {
			  this.$message.error('IDを入力してください');
			  return;
			}
			if (!this.form.password) {
			  this.$message.error('パスワードを入力してください');
			  return;
			}
			if((this.form.ID=="admin")&&(this.form.password==123)){
				  this.$router.push({
						name: 'Home',
				      query: { name:this.form.ID }
            })
			
			}else{
			    this.$message.error('IDまたはパスワードが正しくありません');
				return;
			}
			
		}
  }
}
</script scoped>

<style>
.sys_name{
  font-size: 20px;
  margin: 0;
  padding: 0;
  color:#FFFFFF;
  font-weight: bold;
}
.el_card {
  position: relative;
  top: 150px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  border-radius:10px;
  text-align:center;
}

.el-card__header{
	background:#00B1AE;
}
.login_btn {
	background:#00B1AE;
	width:120px;

}


</style>












