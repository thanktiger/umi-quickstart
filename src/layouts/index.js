
import React from 'react'
import Link from 'umi/link';
import { Layout, Menu, Tabs, Button, Icon, Avatar, Dropdown } from 'antd';
import router from 'umi/router'
import style from './index.less'

import moment from 'moment';
import 'moment/locale/zh-cn';
console.log('moment is:', moment);
moment.locale('zh-cn');

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

class BasicLayout extends React.Component {

  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [];
    this.state = {
      navs: [
        {
          link: 'orderList',
          text: '订单列表'
        },
        {
          link: 'goodsList',
          text: '商品列表'
        },
        {
          link: 'orderDetail',
          text: '订单详情'
        },
      ],
      // activeKey: panes[0].key,
      panes,
    };
  }

  goToPage = (url) => {
    router.push(`/${url}`);
  }

  onChange = async activeKey => {
    // await this.goToPage(item.link);
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = async (item) => {
    await this.goToPage(item.link);
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ link: item.link, title: item.text, content: this.props.children, key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render () {

    const menu = (
      <Menu onClick={() => {console.log(1)}}>
        <Menu.Item key="1">登出</Menu.Item>
      </Menu>
    );

    return (
      <Layout>
        <Sider width={200}>
          <div className={style.logo}>BFE-MOCKUP</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            {
              this.state.navs.map((item, index) => {
                return <Menu.Item key={index} onClick={() => this.add(item)}>{item.text}</Menu.Item>
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <div className={style.header}>
            <div className={style.headerText}>用户列表</div>
            <div className={style.headerRight}>
              <Icon type="bell" />
              <Dropdown overlay={menu}>
                <span style={{ padding: '0 10px' }}>
                  谢虎 <Icon type="caret-down" style={{ fontSize: 12 }} />
                </span>
              </Dropdown>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
          </div>
          <Content className={style.content}>
            <Tabs
              hideAdd
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.panes.map(pane => (
                <TabPane tab={<Link to={pane.link}>{pane.title}</Link>} key={pane.key}>
                  {pane.content}
                </TabPane>
              ))}
            </Tabs>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>bef lab ©2019 Created by Xie Hu</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
