<template>
  <div id="box">
    <div id="top">
      <div style="width: 40%;float:left;margin-left: 30px;">
        <el-carousel trigger="click" >
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img style="width: 100%;height: 100%" :src="item.img"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="el-tab" style="float: right; width: 53% ;margin-right: 30px;">
            <el-tabs  type="border-card" >
              <el-tab-pane label="时政新闻">
                <div  v-for="item in messageList1" :key="item.id" class="text item">
                  <li style="height: 20px; white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;">
                    <a :href="item.href" style="text-decoration-line: none;">{{item.txt}}</a>
                  </li>
                </div>
              </el-tab-pane>
              <el-tab-pane label="新闻联播">
                <div  v-for="item in messageList2" :key="item.id" class="text item">
                  <li style="height: 20px; line-height: 20px; white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;">
                    <a :href="item.href" style="text-decoration-line: none;">{{item.txt}}</a>
                  </li>
                </div>
              </el-tab-pane>
              <el-tab-pane label="工作动态" >
                <div  v-for="item in messageList3" :key="item.id" class="text item">
                  <li style="height: 20px; line-height: 20px; white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow: hidden;">
                    <a :href="item.href" style="text-decoration-line: none;">{{item.txt}}</a>
                  </li>
                </div>
              </el-tab-pane>
            </el-tabs>
      </div>
    </div>
<!--    中间图片的div-->
    <div>
      <img style="width: 100%;" src="../assets/img1.jpg">
    </div>

    <div id="message" style="height: 500px;">
      <div style="margin-top: 20px">
        <div style="float: left;margin-left: 50px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>最新新闻</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="item in infoList" :key="item.id" class="text item">
              <a :href="item.href">{{item.txt}}</a>
            </div>
          </el-card>
        </div>
        <div  style="margin-right:100px;float: right;width: 480px;">

<!--          <el-card>-->
            <el-tabs type="border-card" style="width: 500px;">
              <el-tab-pane label="用户管理">
                  <div v-for="o in 7" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
              </el-tab-pane>
              <el-tab-pane label="配置管理">
                  <div v-for="o in 7" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
              </el-tab-pane>
              <el-tab-pane label="角色管理">
                  <div v-for="o in 7" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
              </el-tab-pane>
            </el-tabs>
<!--          </el-card>-->
        </div>
      </div>
    </div>
<!--    这张图片下面显示的是产业帮扶的信息-->
    <div>
      <img style="width: 100%;" src="../assets/img2.jpg">
    </div>
    <div id="bottom">
      <div>
        <span>这是最下面的东西</span>

      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      infoList: [
        {
          id: 0,
          href: "https://nrra.gov.cn/2023/03/31/ARTI60ZCLwQNHLMNaMwvHhy1230331.shtml",
          txt: "十四届全国人大一次会议在京开幕 习近平栗战书汪洋李强王沪宁韩正蔡奇丁薛祥李希王岐山等在主席台就座李克强作政府工作报告 "},
        {
          id:1,
          href:"http://nrra.gov.cn/art/2023/3/6/art_305_199055.html",
          txt:"习近平在参加江苏代表团审议时强调 牢牢把握高质量发展这个首要任务"},
        {
          id:2,
          href:"http://nrra.gov.cn/art/2023/3/6/art_305_199072.html",
          txt:"两会特稿丨以高质量发展实际行动为新征程开好局起好步——习近平总书记在参加江苏代表团审议时的重要讲话引起热烈反响"},
        {
          id:3,
          href:"http://nrra.gov.cn/art/2023/3/6/art_305_199057.html",
          txt:"第一观察｜从总书记近期重要讲话看开局之年全国两会"},
        {
          id:4,
          href:"http://nrra.gov.cn/art/2023/3/6/art_305_199065.html",
          txt:"两会新华视点丨从三个报告看2023民生新改善"},
      ],
      messageList1: [
        {
          id: 0,
          href: "https://nrra.gov.cn/2023/03/31/ARTI60ZCLwQNHLMNaMwvHhy1230331.shtml",
          txt: "中共中央政治局召开会议 中共中央总书记习近平主持会议 "},
        {
          id:1,
          href:"https://nrra.gov.cn/2023/03/31/ARTIYLuskUXLjPEbqW8Rcnis230331.shtml",
          txt:"一图速览丨学习贯彻习近平新时代中国特色社会主义思想主题教育将这样开展"},
        {
          id:2,
          href:"https://nrra.gov.cn/2023/03/30/ARTINS5xUU0fQc7SazEKsITl230330.shtml",
          txt:"学习进行时丨习近平这样阐述人类命运共同体内涵和实践路径"},
        {
          id:3,
          href:"https://nrra.gov.cn/2023/03/30/ARTIZiQ2i1QqGiUG5R0Ofstr230330.shtml",
          txt:"“习近平高质量发展新论断”系列之四：最终目的——人民幸福安康"},
        {
          id:4,
          href:"https://nrra.gov.cn/2023/03/30/ARTIjhIP1PDhDiKQ2S4IecXZ230330.shtml",
          txt:"携手同行创未来——写在博鳌亚洲论坛2023年年会召开之际"},
          {
          id:5,
          href:"https://nrra.gov.cn/2023/03/30/ARTIjhIP1PDhDiKQ2S4IecXZ230330.shtml",
          txt:"携手同行创未来——写在博鳌亚洲论坛2023年年会召开之际"},
      ],
      messageList2: [
        {
          id: 0,
          href: "https://nrra.gov.cn/2023/03/31/ARTI60ZCLwQNHLMNaMwvHhy1230331.shtml",
          txt: "中共中央政治局召开会议 中共中央总书记习近平主持会议 "},
        {
          id:1,
          href:"https://nrra.gov.cn/2023/03/31/ARTIYLuskUXLjPEbqW8Rcnis230331.shtml",
          txt:"一图速览丨学习贯彻习近平新时代中国特色社会主义思想主题教育将这样开展"},
        {
          id:2,
          href:"https://nrra.gov.cn/2023/03/30/ARTINS5xUU0fQc7SazEKsITl230330.shtml",
          txt:"学习进行时丨习近平这样阐述人类命运共同体内涵和实践路径"},
        {
          id:3,
          href:"https://nrra.gov.cn/2023/03/30/ARTIZiQ2i1QqGiUG5R0Ofstr230330.shtml",
          txt:"“习近平高质量发展新论断”系列之四：最终目的——人民幸福安康"},
        {
          id:4,
          href:"https://nrra.gov.cn/2023/03/30/ARTIjhIP1PDhDiKQ2S4IecXZ230330.shtml",
          txt:"携手同行创未来——写在博鳌亚洲论坛2023年年会召开之际"},
          {
          id:5,
          href:"https://nrra.gov.cn/2023/03/30/ARTIjhIP1PDhDiKQ2S4IecXZ230330.shtml",
          txt:"携手同行创未来——写在博鳌亚洲论坛2023年年会召开之际"},
      ],
      messageList3: [
        {
          id: 0,
          href: "https://nrra.gov.cn/2023/03/31/ARTI60ZCLwQNHLMNaMwvHhy1230331.shtml",
          txt: "中共中央政治局召开会议 中共中央总书记习近平主持会议 "},
        {
          id:1,
          href:"https://nrra.gov.cn/2023/03/31/ARTIYLuskUXLjPEbqW8Rcnis230331.shtml",
          txt:"一图速览丨学习贯彻习近平新时代中国特色社会主义思想主题教育将这样开展"},
        {
          id:2,
          href:"https://nrra.gov.cn/2023/03/30/ARTINS5xUU0fQc7SazEKsITl230330.shtml",
          txt:"学习进行时丨习近平这样阐述人类命运共同体内涵和实践路径"},
        {
          id:3,
          href:"https://nrra.gov.cn/2023/03/30/ARTIZiQ2i1QqGiUG5R0Ofstr230330.shtml",
          txt:"“习近平高质量发展新论断”系列之四：最终目的——人民幸福安康"},
        {
          id:4,
          href:"https://nrra.gov.cn/2023/03/30/ARTIjhIP1PDhDiKQ2S4IecXZ230330.shtml",
          txt:"携手同行创未来——写在博鳌亚洲论坛2023年年会召开之际"},
          {
          id:5,
          href:"https://nrra.gov.cn/2023/03/30/ARTIjhIP1PDhDiKQ2S4IecXZ230330.shtml",
          txt:"携手同行创未来——写在博鳌亚洲论坛2023年年会召开之际"},
      ],
      activeName: 'second',
      imgList: [
        { id:0,img:require("../assets/0.jpg")},
        { id:1,img:require("../assets/1.jpg")},
        { id:2,img: require("../assets/2.jpg")},
        { id:3,img:require("../assets/3.jpg")},
        { id:4,img:require("../assets/4.jpg")},
        { id:5,img:require("../assets/5.jpg")}
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
    
  }
}
</script>

<style>
#top{
  margin-top: 20px;
  height: 350px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 550px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .el-tab .el-tabs__item {
    font-size: 20px !important;
  }

</style>
