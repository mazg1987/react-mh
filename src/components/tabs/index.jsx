import { Badge, TabBar } from "antd-mobile";
import React, { useState } from "react";
import "./tab.scss";
import { useNavigate } from "react-router-dom";

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UserOutline,
} from "antd-mobile-icons";

export default function MTab() {
  const [activeKey, setActiveKey] = useState("");
  const navigate = useNavigate();
  const tabs = [
    {
      key: "",
      title: "漫画",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "world",
      title: "世界",
      icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
      badge: "99+",
    },
    {
      key: "me",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  const tabChange = (select) => {
    setActiveKey(select);
    navigate(`/${select}`);
  };

  return (
    <TabBar activeKey={activeKey} onChange={(select) => tabChange(select)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}
