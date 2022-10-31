import React from "react";
import { Tabs } from "antd-mobile";
import Discover from "../../components/manhua/discover";
import Mfocus from "../../components/manhua/focus";
import MHot from "../../components/manhua/hot";
import { SearchOutline } from "antd-mobile-icons";
import styles from "./index.module.scss";

const Manhua = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab title="发现" key="discover">
            <Discover></Discover>
          </Tabs.Tab>
          <Tabs.Tab title="热门" key="hot">
            <MHot></MHot>
          </Tabs.Tab>
          <Tabs.Tab title="关注" key="focus">
            <Mfocus></Mfocus>
          </Tabs.Tab>
        </Tabs>
      </div>
      <div className={styles.search}>
        <SearchOutline fontSize={16}></SearchOutline>
      </div>
    </div>
  );
};

export default Manhua;
