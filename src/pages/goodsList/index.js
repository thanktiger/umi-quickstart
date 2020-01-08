import React from 'react'
import { Table, Input, Icon, DatePicker, Button } from 'antd';
import style from './index.less'

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const columns = [
  {
    title: '订单ID',
    dataIndex: 'id',
    width: 180
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    width: 201
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 105
  },
  {
    title: '封面',
    dataIndex: 'cover',
    render: text => <img src={text} style={{ width: 40, height: 40 }} alt='' />,
    width: 64
  },
  {
    title: '商品名',
    dataIndex: 'name',
    width: 210
  },
  {
    title: '定价',
    dataIndex: 'price',
    width: 105
  },
  {
    title: '库存',
    dataIndex: 'stock',
    width: 104
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: text => {
      return text === 1 ? '上架' : '下架'
    },
    width: 84
  },
  {
    title: '促销',
    dataIndex: 'promotion',
    width: 104
  },
  {
    title: '快捷操作',
    render: (text, record) => (
      <span>
        <a>查看</a>
        <a>设置状态</a>
        <a>编辑库存</a>
      </span>
    ),
    width: 230
  },
];

const data = [
  {
    key: '1',
    id: '74d27468e864',
    time: moment().format('L'),
    type: '单品',
    cover: 'https://yinxiang.12km.com/static/productListItem2.ab631288.png',
    name: 'iphone 13 pro',
    price: '29313',
    stock: '20',
    status: 1,
    promotion: '-'
  },
  {
    key: '2',
    id: '74d27468e864',
    time: moment().format('L'),
    type: '单品',
    cover: 'https://yinxiang.12km.com/static/productListItem2.ab631288.png',
    name: 'iphone 13 pro',
    price: '29313',
    stock: '20',
    status: 1,
    promotion: '-'
  },
  {
    key: '3',
    id: '74d27468e864',
    time: moment().format('L'),
    type: '单品',
    cover: 'https://yinxiang.12km.com/static/productListItem2.ab631288.png',
    name: 'iphone 13 pro',
    price: '29313',
    stock: '20',
    status: 1,
    promotion: '-'
  },
  {
    key: '4',
    id: '74d27468e864',
    time: moment().format('L'),
    type: '单品',
    cover: 'https://yinxiang.12km.com/static/productListItem2.ab631288.png',
    name: 'iphone 13 pro',
    price: '29313',
    stock: '20',
    status: 1,
    promotion: '-'
  },
  {
    key: '5',
    id: '74d27468e864',
    time: moment().format('L'),
    type: '单品',
    cover: 'https://yinxiang.12km.com/static/productListItem2.ab631288.png',
    name: 'iphone 13 pro',
    price: '29313',
    stock: '20',
    status: 1,
    promotion: '-'
  },
];

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class GoodsList extends React.Component {
  render () {
    return (
      <div className={style.content}>
        <div className={style.searchBar}>
          <Input
            style={{ maxWidth: '300px', marginRight: 10 }}
            placeholder='输入ID/订单号/运单号关键字'
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <RangePicker onChange={onChange} style={{ marginRight: 10 }} />
          <Button type="primary">查询</Button>
        </div>
        <Table columns={columns} dataSource={data} bordered />
      </div>
    );
  }
}
