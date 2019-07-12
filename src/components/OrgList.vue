<template>
  <div>
    <div class="searchBox">
      <el-input prefix-icon="iconfont icon-sousuo" v-model="searchTableInfo" placeholder="请输入搜索内容" style="width:240px"></el-input>
    </div>
    <el-table
      :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
      border
      style="width: 100%;margin: 10px 0;text-align:center;">
      <el-table-column
        prop="date"
        align="center"
        label="手机"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="姓名"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="地址"
        min-width="30%">
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      center
      background
      layout="prev, pager, next, sizes, total, jumper"
      :page-sizes="[4,6,8,10]"
      :page-size="pagesize"
      :total="tableData.length"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default {
  	name: "组件名",
    data() {
      return {
        //搜索条件
        searchTableInfo:"",
        pagesize: 6,
        currpage: 1,
        getSearchInfo:[],

      };
    },
    methods: {
      handleCurrentChange(cpage) {
        this.currpage = cpage;
      },
      handleSizeChange(psize) {
        this.pagesize = psize;
      },

      //获取信息
      info(){
      //这些数据视情况，是你从后端拿来的。
        let Data=[
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-03",
            name: "王二虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-04",
            name: "王二虎",
            address: "上海市普陀区金沙江路 1516 弄"
          },
          {
            date: "2016-05-05",
            name: "王三虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "王三虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-07",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ];
        this.getSearchInfo = Data;
        console.log(this.getSearchInfo)
      }
    },
    computed: {
      // 根据计算属性模糊搜索
      tableData () {
        const searchTableInfo = this.searchTableInfo
        if (searchTableInfo) {
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          return this.getSearchInfo.filter(data => {
            console.log("success"+data)
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data).some(key => {
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(searchTableInfo) > -1
            })
          })
        }
        return this.getSearchInfo
      }
    },
    created(){
      this.info();
    }
  }
</script>

<style>

</style>
