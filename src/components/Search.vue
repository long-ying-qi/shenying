<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_srapper">
        <i class="fa fa-search"></i>
        <input type="text" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul class="dianyin">
        <li>
          <div class="img">
            <img src="../../public/images/001.png" width="100%" />
          </div>
          <div class="info">
            <p>
              <span>机械师2</span>
              <span class="you">8.9</span>
            </p>
            <p>剧情，喜剧，犯罪</p>
            <p>2020-6-30</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search"
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#content .search_body {
  flex: 1;
  overflow: auto;
}
.search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input_srapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
}
.search_body .search_input_srapper i {
  font-size: 16px;
  padding: 4px 0;
}
.search_body .search_input_srapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
}
.search_body .search_resule h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
.dianyin li {
  border-bottom: 1px dashed #c9c9c9;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
}
.search_body .search_resule img {
  width: 60px;
  float: left;
}
.search_body .search_resule .img {
  width: 113px;
}
.img {
  width: 113px;
  float: left;
}
.search_body .search_resule .img img {
  width: 100%;
}
.search_body .search_resule .info {
  float: left;
  margin-left: 15px;
  flex: 1;
}
.info {
  float: left;
  margin-left: 15px;
  flex: 1;
}
.search_body .search_resule .info p {
  height: 22px;
  display: flex;
  line-height: 22px;
  font-size: 12px;
}
.search_body .search_resule .info p:nth-of-type(1) span:nth-of-type(1) {
  font-size: 18px;
}
.you {
  font-size: 16px;
  margin-left: 145px;
  color: #fc7103;
}
</style>