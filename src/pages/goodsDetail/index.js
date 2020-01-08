import React from 'react'
import { Table, Divider, Button, Input, Icon } from 'antd'
import style from './index.less'

import PicturesWall from '../../components/PicturesWall'

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
    dataIndex: 'name'
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

export default class GoodsDetail extends React.Component {

  renderOrderInfo = () => {
    let isEdit = false
    return (
      <div className={style.section}>
          <div className={style.title}>
            <span className={style.titleText}>商品信息</span>
            <div className={style.clipboard}>
              ID:<span>123123123123123</span><Icon type="copy" />
            </div>
          </div>
          <div className={style.main}>
            <div className={style.w200}>
              <Input
                addonBefore="创建时间"
                defaultValue=""
                disabled={isEdit} />
            </div>
            <div className={style.w320}>
              <Input
                addonBefore="当前状态"
                addonAfter={<a onClick={() => {alert('设置')}}>设置</a>}
                defaultValue=""
                disabled={isEdit} />
            </div>
            <br />
            <div className={style.w200}>
              <Input
                addonBefore="类型"
                defaultValue=""
                disabled={isEdit} />
            </div>
            <br />
            <div className={style.w200}>
              <Input
                addonBefore="商品名"
                defaultValue=""
                disabled={isEdit} />
            </div>
            <br />
            <div className={style.w500}>
              <Input
                addonBefore="推荐语"
                suffix={<Icon type="reconciliation" />}
                defaultValue=""
                disabled={isEdit}
              />
            </div>
          </div>
          <PicturesWall />
          <div className={style.buttons}>
            <Button type="primary">编辑</Button>
          </div>
      </div>
    )
  }

  renderPricingAndPromotion = () => {
    return (
      <div className={style.section}>
        <div className={style.title}>
          <span className={style.titleText}>定价与促销</span>
        </div>
        <div className={style.flexBox}>
          <div className={style.w200}>
            <Input
              addonBefore="定价"
              addonAfter={<a onClick={() => {alert('修改')}}>修改</a>}
              defaultValue="99.0"
              disabled={false} />
          </div>
          <div className={style.w320}>
            <Input
              addonBefore="库存"
              addonAfter={
                <div classNam={style.flexBox}>
                  <span className={style.inputButton} onClick={() => {alert('增加')}}>增加</span>
                  <span className={style.inputButton} onClick={() => {alert('减少')}}>减少</span>
                  <span className={style.inputButton} onClick={() => {alert('记录')}}>记录</span>
                </div>
              }
              defaultValue="320"
              disabled={false} />
          </div>
        </div>
        <Divider />
        <div className={style.flexBox}>
          <div className={style.w320}>
            <Input
              addonBefore="促销方案 "
              value='满100减10'
              disabled={false} />
          </div>
        </div>
        <div className={style.flexBox}>
          <div className={style.w320}>
            <Input
              addonBefore="促销方案 "
              value='买赠300oz咖啡随行杯'
              disabled={false} />
          </div>
        </div>
        <div className={style.buttons}>
          <Button type="primary">促销管理</Button>
        </div>
      </div>
    )
  }

  render () {
    return (
      <>
        {this.renderOrderInfo()}
        {this.renderPricingAndPromotion()}
      </>
    );
  }
}
