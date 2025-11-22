import React from "react";

import { Layout, Menu, Typography } from "antd";
import { HeartFilled } from "@ant-design/icons";

import Experience from "./Experience";

const { Content, Footer, Sider } = Layout;
const { Item } = Menu;
const { Title } = Typography;

const Main = (): JSX.Element => {
  return (
    <Layout>
      <Layout
        className="site-layout"
        style={{ marginRight: 200, borderRight: "#558b2f" }}
      >
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Title>Overview</Title>
          <Title>Experience</Title>
          <Experience />
          <Title>Education</Title>
          <Title>Skills</Title>
          <Title>Contact</Title>
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="vaishnavisriram"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/vaishnavisriram?trk=profile-badge"
            >
              Vaishnavi Sriram
            </a>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#FFF" }}>
          Made with <HeartFilled /> from India
        </Footer>
      </Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          right: 0,
          background: "#FFF",
        }}
      >
        <Menu>
          <Item key="1">Overview</Item>
          <Item key="2">Experience</Item>
          <Item key="3">Education</Item>
          <Item key="4">Skills</Item>
          <Item key="5">Contact</Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Main;
