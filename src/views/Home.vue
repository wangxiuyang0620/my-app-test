<template>
  <div class="wrap">
    <header class="header">
      <h3>任务发放</h3>
      <span class="tab">
         <span v-for='(item,index) in navlist' :key="index" @click="changtab(index,item.type)" :class="{'col':currentIndex===index}">{{item.title}}</span>
      </span>
      <input type="text" placeholder="请输入任务名进行查询" v-model="serchValue" @input="input"/>
    </header>
    <main class="main" v-for="(item,index) in newlist" :key="index">
      <Wrokitem :data='item'></Wrokitem>
    </main>
  </div>
</template>

<script>
import Wrokitem from "../components/workitem";
export default {
    data(){
        return{
            navlist:[
                {
                    title:"全部任务",
                    type:""
                },{
                    title:"进行中的任务",
                    type:"pending"
                },{
                    title:'强制终止的任务',
                    type:"reject"
                },{
                    title:"已完成的任务",
                    type:"fullfilled"
                }
            ],
            serchValue:''
        }
    },
  components: {
    Wrokitem
  },
  computed:{
      currentIndex(){
          return this.$store.state.currentIndex
      },
      newlist(){
          return this.$store.getters.filterList
      }
  },
  methods:{
      changtab(index,type){
          this.$store.commit({type:"setState",key:"currentIndex",value:index})
          this.$store.commit({type:"setState",key:'filterType',value:type})
       
      },
      input(e){
          this.$store.commit({type:"setState",key:"serchList",value:e.target.value})
      }
  },
  mounted(){
      this.$store.dispatch({type:"getList"})
      console.log(this.newlist)
  }
  
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 900px;
  height: 500px;
  background: rgb(22, 151, 236);
  margin: 50px auto;
  padding: 20px;
}
.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #fff;
  display: flex;
  h3 {
    color: #fff;
    font-size: 30px;
  }
  .tab{
      width: 600px;
      display: flex;
      span{
          flex: 1;
          text-align: center;
          line-height: 40px;
          border: 1px solid #fff;
          margin: 5px;
          color: #fff;
          &.col{
              background: orange;
          }
      }
  }
  input{
   
      height: 30px;
  }
}
</style>