import React,{useEffect} from "react";
import { fetchGet } from "../../../utils/http";

const Discover = () => {
  const getData = async ()=>{
    const result = await fetchGet("/v2/pweb/daily/topics?pos=6")
    console.log(result,"xxxxxxxxxxxxxxxxxxx")
  }

  const getData2 = async ()=>{
    const result = await fetchGet("/v1/graph/pc/feeds/getRecommendFeed?uid=0&webTokenId=1615007958330_FFwnyURnzD0rgO2&since=0&limit=20")
    console.log(result,"yyyyyyyyyyyyyyyyy")
  }

  useEffect(()=>{
    getData()
    getData2();
  },[])

  return (
    <div style={{background:"pink"}}>
      发现
      <div>333333333333333333</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>22222222222222222</div>
    </div>
  );
};

export default Discover;
