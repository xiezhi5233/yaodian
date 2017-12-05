<template>
    <div id="details_config">
      <div class="details-cont">
        <h1 v-text="data.tit">详情页</h1>
        <div><span>发布日期:{{data.date}}</span> <span>阅读量:{{data.num}}</span></div>
        <p v-for="p in data.p" v-text="p"></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          data:{
            tit:"眼科医疗设备进口替代将提速,进口化替代步伐正在加快",
            date:"2015-12-21",
            num:"1000",
            p:["医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以及临床眼科等，为眼科医疗设备技术的发展起到重要作用。另外，随着电子产品的普及、老龄化加剧以及青少年近视等，导致相关眼疾患病率呈上升趋势，促使患者对眼科医疗服务的需求逐年增加。我国目前患有视力损害的大约为3亿人，其中有4500万例盲症，视力损害患者较多，约占68%。市场需求不断扩大将带动眼科医疗器械快速发展。","全球医疗器械市场规模正逐年扩大，眼科器械占比有望快速增长。据欧盟医疗器械委员会的统计显示，全球医疗器械市场销售总额已从2006 年的2900亿美元迅速上升至2014年的5591亿美元，年复合增速达8.82%。目前，美国、日本等国占据了超过80%的全球医疗器械市场。其中，美国是世界上最大的医疗器械生产国和消费国，其消费量占全球市场的40%左右。"]
          }
      };
    },
    methods: {

    }
  };
</script>
<style scoped lang="less">
  @import url("../../base/css/config-style.less");
  #details_config{
    position: absolute;
    top: .88rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: @bodyBg;
    .details-cont{
      padding:.5rem .3rem 1rem;
      h1{
          font-size: .36rem;
      }
      >div{
        span{
          font-size: .24rem;
          color:@lecDetailsDate;
        }
        span+span{
          float: right;
        }
      }
      p{
        font-size: .28rem;
        text-indent:.56rem;
        color:@lecDetailsP;
        line-height: 1.8;
      }
    }
  }

</style>
