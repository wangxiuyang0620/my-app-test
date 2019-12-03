<template>
  <div class="item">
    <div class="left">
     <Icon :type="data.type"></Icon>
    </div>
    <div class="center">
     <h2>{{data.title}}</h2>
     <p>
       <Star :score="data.score"></Star>
     </p>
     <p>{{data.startTime}}</p>
     <p>{{data.endTime}}</p>
    </div>
    <div class="right">
      <Tab :data="data.class"/>
    </div>
  </div>
</template>

<script>
import Star from './star'
import Icon from './Icon'
import Tab from './tab'
export default {
  props: ["data"],
  components:{
    Star,
    Icon,
    Tab
  }
};
</script>

<style lang="scss" scoped>
.item{
  width: 100%;
  height: 100px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
  margin: 5px 0;
  display: flex;
  .left{
    width: 100px;
    height: 100px;
   background: #ccc;
  }
  .center{
    flex: 7;
  }
  .right{
    flex: 1;
  }
}
</style>