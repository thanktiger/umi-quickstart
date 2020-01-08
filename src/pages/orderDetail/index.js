import React from 'react'
import { Table, Divider, Button, Input, Icon } from 'antd'
import style from './index.less'

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  console.log('obj is:', obj)
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: '商品ID',
    dataIndex: 'id',
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '商品名',
    dataIndex: 'name',
  },
  {
    title: '数量',
    dataIndex: 'number',
  },
  {
    title: '总价',
    dataIndex: 'totalPrice',
  },
  {
    title: '优惠',
    dataIndex: 'discount',
  },
  {
    title: '实收',
    dataIndex: 'receipts',
  },
  {
    title: '卡券',
    dataIndex: 'coupon',
  }
];

const data = [
  {
    key: '1',
    id: '1',
    type: '单品',
    name: '2',
    number: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '-',
    coupon: '23'
  },
  {
    key: '2',
    id: '2',
    type: '单品',
    name: '2',
    number: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '-',
    coupon: '23'
  },
  {
    key: '3',
    id: '3',
    type: '单品',
    name: '2',
    number: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '-',
    coupon: '23'
  },
  {
    key: '4',
    id: '4',
    type: '单品',
    name: '2',
    number: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '-',
    coupon: '23'
  },
  {
    key: '5',
    name: '总计',
    number: '2',
    totalPrice: '293',
    discount: '20',
    receipts: '200',
    coupon: '23'
  },
];

export default class OrderDetail extends React.Component {


  renderOrderInfo = () => {
    let isEdit = true
    return (
      <div className={style.section}>
          <div className={style.title}>
            <span className={style.titleText}>订单信息</span>
            <div className={style.clipboard}>
              ID:<span>123123123123123</span><Icon type="copy" />
            </div>
          </div>
          <div className={style.main}>
              <Input className={style.w200} addonBefore="创建时间" defaultValue="" disabled={isEdit} />
              <Input className={style.w200} addonBefore="用户" defaultValue="" disabled={isEdit} />
              <Input className={style.w200} addonBefore="收货人" defaultValue="" disabled={isEdit} />
              <Input className={style.w200} addonBefore="联系电话" defaultValue="" disabled={isEdit} />
              <Input className={style.w500} addonBefore="收货地址" defaultValue="" disabled={isEdit} />
              <Input className={style.w200} addonBefore="用户备注" defaultValue="" disabled={isEdit} />
          </div>
          <div className={style.buttons}>
            <Button type="primary">编辑</Button>
          </div>
      </div>
    )
  }

  renderOrderStatus = () => {
    return (
      <div className={style.section}>
          <div className={style.title}>
            <span className={style.titleText}>订单状态</span>
          </div>
          <div className={style.progress}>
            <div className={true ? style.progressCellOn : style.progressCell}>待支付</div>
            <div className={true ? style.progressCellOn : style.progressCell}>待发货</div>
            <div className={style.progressCell}>待收货</div>
            <div className={style.progressCell}>已完成</div>
          </div>
          <div className={style.main}>
            <Input className={style.w200} addonBefore="当前状态" defaultValue="" />
            <Input className={style.w320} addonBefore="状态变更时间 " defaultValue="" />
            <Input className={style.w200} addonBefore="操作角色" defaultValue="" />
            <Button className={style.m10} type="primary" ghost>流程记录</Button>
            <Button className={style.m10} type="primary" ghost disabled>物流信息</Button>
          </div>
          <div className={style.buttons}>
            <Button type="primary">取消订单</Button>
          </div>
      </div>
    )
  }

  renderOrderGoods = () => {
    return (
      <div className={style.section}>
        <div className={style.title}>
          <span className={style.titleText}>订单商品</span>
        </div>
        <div className={style.goodsList}>
          <Table columns={columns} dataSource={data} bordered pagination={false} />
        </div>
      </div>
    )
  }

  render () {
    return (
      <>
        {this.renderOrderInfo()}
        {this.renderOrderStatus()}
        {this.renderOrderGoods()}
      </>
    );
  }
}
