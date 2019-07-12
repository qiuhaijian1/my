<template>
	<div>
		<div  class="body_header">	
			<el-row :gutter="20">
				<el-col :span="12">
				    <el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item style="margin-top: 10px"><router-link to="/Home">事業所一覧</router-link></el-breadcrumb-item>
				
				</el-breadcrumb>
				</el-col>
				<div  v-show="isShow2">
					<el-col :span="12" class="body_header_btns">
						<el-button class="page_header_btn1" type="medium">一覧出力</el-button>
						<el-button class="page_header_btn1"  @click=IsMasking  type="medium">一括登録</el-button>
						<el-button class="page_header_btn1"  type="medium"><router-link to="/IdNewLogin"  class="page_header_link">新規登録</router-link></el-button>
						
					</el-col>
				</div>
			</el-row>
			</div>
										  <div class="outermost"  v-show="isMasking">
												<div class="outermost_box">
												  <div class="outermost_box_top">
													<span>OSのxxxx画面</span>
												  </div>
												  <div class="outermost_box_btn">
													<button class="return-btn" @click=IsMasking>关闭</button>
													<button class="regis-btn" @click=IsMasking()>キャンセル</button>
												  </div>
												</div>
										  </div>
		<div>
			<el-card class="box_card" shadow="always">
				<el-button type="medium" class="card_btn" @click=ispopover()>抽出</el-button>
				<div  class="box_card_span" v-show="isShow2"><span>{{form.province}}- {{form.city}}</span></div>
			</el-card>
			
			<div class="extraction_box" v-show="isShow">
				<div class="extraction_box_head"><span>抽出</span></div>
				<el-form class="extraction_box_form" ref="form" :model="form" label-width="150px" label-position="top" >			
					<div class="extraction_box_p">
						<p>都道府県</p>
					</div>
					<el-form-item>
						<el-select v-model="form.province"  @change="provinceChanged" placeholder="(すベて)">				
							<el-option v-for="item in provinces" :key="item.code" :label="item.name" :value="item.code">
							</el-option>
						</el-select>
					</el-form-item>
					<div class="extraction_box_p">
						<p>自治体</p>
					</div>
					<el-form-item>
						<el-select v-model="form.city" :loading="loadingCity" @change="cityChanged" placeholder="(すベて)">
					
							<el-option v-for="item in cities"  :key="item.code" :label="item.name" :value="item.name">
							</el-option>
						</el-select>
					</el-form-item>
					<div class="extraction_box_p">
						<p>撿索キーワード</p>
					</div>
					<el-form-item>
						　<el-input class="extraction_box_input" v-model="form.type"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button @click=ispopover() >キヤンセル</el-button>
						<el-button @click=ispopover2(form.city)  class="extraction_box_btn2">决定</el-button>
					</el-form-item>				
				</el-form>
			</div>
		</div>
		<div v-show="isShow2">
			<el-card class="table_card" shadow="always">
				 <el-table  :data="tables.slice((currpage - 1) * pagesize, currpage * pagesize)"
					class="table_card_table" row-style="height:66px">				
					<el-table-column label="有効" width="100px">
					    <template slot-scope="slotProps">
							  <span style="font-size: 20px" v-if="slotProps.row.effective == 1">o</span>
							  <span style="font-size: 30px" v-else="slotProps.row.effective == 0">x</span>
						</template>
					</el-table-column>
					<el-table-column width="150px" align="center" label="自治体名"  prop="city">
					</el-table-column>
					<el-table-column width="300px" label="事业所登录番号" align="center" prop="number">
					</el-table-column>
					<el-table-column label="事业所名"  prop="business">
					</el-table-column>
					<el-table-column  align="right">
					 <template slot="header" slot-scope="scope">
						<el-input
							class="table_search"
							v-model="search"
							icon="el-icon-search"
							placeholder="输入关键字搜索"/>
					  </template>
					  <template slot-scope="scope">			  
						<el-button width="98px"	height="36px"  @click="handleEdit(scope.$index, scope.row)">詳細<i class="el-icon-arrow-right"></i></el-button>
					  </template>
					</el-table-column>
				  </el-table>
							
					
			 <el-pagination
				class="pagination"
				layout="prev, pager, next, sizes"
				:total="enterprise.length"
				:page-sizes="7"
				:page-size="pagesize"
				 @current-change="handleCurrentChange"
				 @size-change="handleSizeChange">
			</el-pagination>

							
			
			
		    </el-card>
	
		</div>
	
	</div>
</template>
<script>

    	import provinceCity from '../../static/table.json'
		import enterprise1 from '../../static/enterprise.json'
  export default {
  
    name: 'provinceCity',
    name: 'enterprise1',

    data() {
        return { 
			cities:[],
			loadingCity:false,
			isMasking:false,
			search: '',
			isShow:false,
			isShow2:false,
			provinces:[],
			enterprise:[],
			pagesize:7,
			currpage:1,
			form:{
				province:"",
				city:"",
				type:""
			
			},   
       
      };
    },


	created() {
      this.provinces = provinceCity.provinces;
      this.enterprise = enterprise1.enterprise;
    },
	computed: {
		
      tables () {
        const search = this.search
        if (search) {
			 
          return this.enterprise.filter(data => {
            
         
            return Object.keys(data).some(key => {
           
              return String(data[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.enterprise
      }
    },
    methods: {
	 
	 handleCurrentChange(cpage) {
        this.currpage = cpage;
      },
      handleSizeChange(psize) {
        this.pagesize = psize;
      },

	
		IsMasking(){	
			this.isMasking=!this.isMasking;
		},
		 provinceChanged(key) {
        if (key !== '') {
          this.loadingCity = true
          for (var item1 of this.provinces) {
            if (item1.code === key) {
              this.cities = item1.cities
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
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		ispopover(){
			this.isShow= !this.isShow;	
			this.isShow2=flase;
		},  
		ispopover2(type){
		if(type==""){} else {
			this.isShow= !this.isShow;
			this.isShow2= true;	}
		},
		handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
	  cityChanged(value) {
      },
	  newLogin(){
		  this.$router.push({
			name: 'IdNewLogin',
            })
	  
		},
	
	}
}
</script>
<style>
		.body_header{
		margin:20px 25px 0 45px;
		height:40px;
	}	
	.body_header_btns{
		text-align:right;
	}
	.page_header_btn1{
		margin-right:10px;
	
		
	}
	.page_header_link{
		text-decoration:none;
		color:#606266;
	}
	.card_btn{
		width:92px;
		float:left;
	}

	.box_card{
		margin:5px 35px 0 35px;
		text-align:left;
		height:75px;
		
	}
	.box_card_span{
		float:left;
		margin-left:70px;
		margin-top:5px;

	}
	.table_card{
		margin:20px 35px 0 35px;
		height:630px;
		z-index:1;
	}
	.extraction_box{
		position:absolute;		
		width:400px;
	    left: 147px;
		top: 208px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
		background-color:#fff;
		height:500px;
		z-index:999;
		
	}
	.extraction_box_head{
		background-color:#00B1AE;
		color:#fff;
		height:55px;
	}
	.extraction_box_head span{
		display:block;
		margin-left:8%;
		padding-top: 13px;
	}
	.extraction_box_form{
		text-align:center;
	
	}
	.el-select{
		width: 84%;
	}
	.extraction_box_input{
		width: 84%;
	}
	
	.extraction_box_p{
		float:left;
		margin-left:8%;
		
	}
	.extraction_box_btn2{
		background-color:#00B1AE;
	}
	
	.table_card_table{
		width: 100%;
		max-height:550px;
	
	}
	.pagination{
		float:right;
		margin-bottom:20px;

	}
	.table_search{
		float:right;
		width:50%;
		margin-right:-20px;
		
	}
	.pagination{
		float:right;
		
	}
	
	
						  .outermost{
						position:fixed;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						text-align: center;
						z-index:2003;
						background: rgba(0, 0, 0, .6);
					  }
					  .outermost_box{
						height: 55%;
						width: 55%;
						margin-top: 11%;
						display: inline-block;
						padding-bottom: 10px;
						vertical-align: middle;
						background-color: #fff;
						border-radius: 4px;
						border: 1px solid #ebeef5;
						font-size: 18px;
						box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
						overflow: hidden;
						backface-visibility: hidden;
					  }
					  .outermost_box_top{
						color: red;
						font-size: 25px;
						padding-top: 20%;
					  }
					  .outermost_box_btn{
						height: 16%;
						padding-top: 20%;
						padding-left: 60%;
					  }

					  .return-btn{
						height: 50%;
						margin-top: 15px;
						margin-right: 7px;
						border:1px solid black;
						padding:2px 20px;
						cursor: pointer;
						background-color:white;
					  }

					  .regis-btn{
						height: 50%;
						margin-top: 15px;
						margin-left: 7px;
						border:1px solid black;
						padding:2px 30px;
						cursor: pointer;
						background-color:white;
					  }
																	
</style>
