<template>
  <div>
    <div>
      <p v-if=" type === 'pending' "> <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246590788,1559842891&fm=26&gp=0.jpg" alt=""> <span>进行中</span></p>
      <p v-if=" type === 'reject' "><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3957076470,1239581065&fm=26&gp=0.jpg"><span>强制终止</span></p>
      <p v-if=" type === 'fullfilled' "> <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2345426386,2190051730&fm=26&gp=0.jpg"> <span>已完成</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"]
};
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    height: 100%;
    div{
        width: 100%;
        height: 100%;
        p{
            width: 100%;
            height: 100%;
             display: flex;
             flex-direction: column;
            img{
                width: 100px;
                height: 70px;
            }
            span{
                text-align: center;
            }
        }
    }
}
</style>