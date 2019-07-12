<template>
	<div>
		<div  class="body_header">	
			<el-row :gutter="20">
				<el-col :span="12">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item style="margin-top: 10px" :to="{ path: '/Home' }">事業所一覧</el-breadcrumb-item>
					<el-breadcrumb-item style="margin-top: 10px">事業所一覧新規登録</el-breadcrumb-item>
				</el-breadcrumb>
				</el-col>
				
			</el-row>
		</div>
		<div class="busine_card">
		  <div class="busine_card_top">
			<span>基本情报</span>
		  </div>
		  <div class="busine_card_main">
			<table class="busine_card_table">
			  <tr>
				<th>自治体<span>*</span></th>
				<td>
				  都道府県
				  <el-select class="select_el_prefectures" v-model="province" placeholder=" " @change="provinceChanged">
					<el-option :key="''" :label="''" :value="''"></el-option>
					<el-option v-for="item in provinces" :key="item.code" :label="item.name" :value="item.code"></el-option>
				  </el-select>
				  自治体
				  <el-select class="select_el" v-model="city" :loading="loadingCity" @change="cityChanged" placeholder=" ">
					<el-option :key="''" :label="''" :value="''"></el-option>
					<el-option v-for="item in cities" :key="item.code" :label="item.name" :value="item.code"></el-option>
				  </el-select>
				  <el-button class="card_btn">决定</el-button>
				</td>
			  </tr>
			  <tr>
				<th>事业所名<span>*</span></th>
				<td><el-input class="table_long" v-model="input" placeholder="请输入内容"></el-input></td>
			  </tr>
			  <tr>
				<th>事业所登录番号<span>*</span></th>
				<td><el-input class="table_short" v-model="input" placeholder="请输入内容"></el-input></td>
			  </tr>
			  <tr>
				<th>住所</th>
				<td><el-input class="table_long" v-model="input" placeholder="请输入内容"></el-input></td>
			  </tr>
			  <tr>
				<th>电话</th>
				<td><el-input class="table_short" v-model="input" placeholder="请输入内容"></el-input></td>
			  </tr>
			  <tr>
				<th>Fax</th>
				<td><el-input class="table_short" v-model="input" placeholder="请输入内容"></el-input></td>
			  </tr>
			  <tr>
				<th>メ</th>
				<td><el-input class="table_long" v-model="input" placeholder="请输入内容"></el-input></td>
			  </tr>
			</table>
		  </div>
		  <div class="busine_card_btn" style="height: 10%">
			<button class="return-btn" >キャンセル</button>
			<button class="regis-btn" @click="open">登录</button>
		  </div>
		</div>
	</div>
</template>
<script>
	import provinceCity from '../../static/table.json'
	  export default {
		name: 'provinceCity',
		data() {
		  return {
		    boxshow:false,
        input:null,
        loadingCity: false,
        province: '',
        city: '',
        boxNumber:1,
        provinces: [],
        cities: []
		  };
		},
		methods: {
			      showBox() {
        this.boxshow = !this.boxshow
      },
      formValidate:function(event){
        this.$emit("formBoxDate",this.province, this.city,this.boxNumber)

      },
      provinceChanged(value) {
        if (value !== '') {
          this.loadingCity = true
          for (var item of this.provinces) {
            if (item.code === value) {
              this.cities = item.cities
              this.city = ''
              this.loadingCity = false
              break
            } else {
              continue
            }
          }
        } else {
          this.cities = []
          this.city = ''
        }
      },
      cityChanged(value) {
      },
      open() {
        this.$alert('登录完了', {
          confirmButtonText: '确定'
        }).then((action) => {
          if(action ==='confirm'){
            this.$router.replace({path:'/Home'})
          }
        })
      }
		
		},
		   created() {
		  this.provinces = provinceCity.provinces
		},
		
		
	  }
	  
</script>
<style scoped>
		.body_header{
		margin:20px 25px 0 45px;
		height:40px;
	}	
	  .busine_card{
    height: 700px;
    border: 1px solid #f3f3f3;
    margin-left: 1.5%;
    margin-right: 1.5%;
    margin-top: 0.5%;
    border-color: #d7d9d9;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
  }
  .busine_card_top{
    display: flex;
    border-bottom: solid 1px #ebeef5;
    margin: 20px;
  }
  .busine_card_top>span{
    font-size: 20px;
    float: left;
    margin-left: 5px;
    margin-bottom: 1%;
  }
  .busine_card_main{
    border-bottom: solid 1px #ebeef5;
    margin: 20px;
  }
  .busine_card_table{
    height: 70%;
    padding-bottom: 1%;
  }
  th{
    padding: 12px 40px;
    text-align: left;
    color: #606266;
    width: 20%;
  }
  td{
    padding: 12px 40px;
    text-align: left;
    color: #606266;
  }
  .table_short{
    width: 30%;
  }
  th>span{
    color: red;
    font-size: 20px;
  }
  .card_btn{
    margin-left: 8%;
    padding:12px 25px;
  }
  .el-button:focus, .el-button:hover{
    color: #00b1ae;
  }
  .select_el_prefectures{
    width: 20%;
    margin-right: 5%;
  }
  .return-btn{
    height: 50%;
    margin-top: 15px;
    margin-right: 7px;
    border:1px solid #DDD;
    border-radius:6px;
    padding:2px 20px;
    cursor: pointer;
    background-color:white;
  }
  .regis-btn{
    height: 50%;
    margin-top: 15px;
    margin-left: 7px;
    border:1px solid #DDD;
    border-radius:6px;
    padding:2px 30px;
    cursor: pointer;
    background-color:#00b1ae;
    color: white;
  }
	
</style>
