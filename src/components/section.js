import React from 'react'
import { Table, Divider, Tag } from 'antd'
import style from './index.less'

export default class Section extends React.Component {

  render () {
    const { title, content } = this.props
    console.log('content is:', content);
    return (
      <>
        <div className={style.section}>
            <div className={style.sectionTitle}>
              <span>{title}</span>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        </div>
      </>
    );
  }
}
