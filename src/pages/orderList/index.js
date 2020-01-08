import React from 'react'
import { Table, Divider, Tag, Input, Icon, DatePicker, Button } from 'antd';
import style from './index.less'

const columns = [
  {
    title: '创建ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
    render: text => <a>{text}</a>,
  },
  {
    title: '商品',
    dataIndex: 'goods',
    key: 'goods',
    render: text => <a>{text}</a>,
  },
  {
    title: '总价',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    render: text => <a>{text}</a>,
  },
  {
    title: '优惠',
    dataIndex: 'discount',
    key: 'discount'
  },
  {
    title: '实收',
    dataIndex: 'receipts',
    key: 'receipts'
  },
  {
    title: '卡券',
    dataIndex: 'coupon',
    key: 'coupon'
  },
  {
    title: '当前状态',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: '物流单号',
    dataIndex: 'trackingNumber',
    key: 'trackingNumber'
  },
  {
    title: '快捷操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>查看</a>
        <Divider type="vertical" />
        <a>设置状态</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    id: '1',
    time: new Date().getDate(),
    user: '谢虎',
    goods: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '200',
    coupon: '23',
    status: '待发货',
    trackingNumber: '1231231234',
  },
  {
    key: '2',
    id: '1',
    time: new Date().getDate(),
    user: '谢虎',
    goods: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '200',
    coupon: '23',
    status: '待发货',
    trackingNumber: '1231231234',
  },
  {
    key: '3',
    id: '1',
    time: new Date().getDate(),
    user: '谢虎',
    goods: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '200',
    coupon: '23',
    status: '待发货',
    trackingNumber: '1231231234',
  },
  {
    key: '4',
    id: '1',
    time: new Date().getDate(),
    user: '谢虎',
    goods: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '200',
    coupon: '23',
    status: '待发货',
    trackingNumber: '1231231234',
  },
  {
    key: '5',
    id: '1',
    time: new Date().getDate(),
    user: '谢虎',
    goods: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '200',
    coupon: '23',
    status: '待发货',
    trackingNumber: '1231231234',
  },
];

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class OrderList extends React.Component {
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
