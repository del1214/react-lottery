import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Lottery from '../Lottery'
import Winners from '../Winners'
import { Row, Col } from 'antd'


import './style.css'

@inject('store')
@observer
class App extends Component {

  componentDidMount () {
    this.props.store.getAwardsAction()
    this.props.store.getPeopleAction()
    window.addEventListener('resize', this.resizeHandle)
  }

  resizeHandle = () => {
    this.props.store.resizeContentHeight()
  }

  render() {
    const store = this.props.store
    return (
      <div className="app-container">
        <h1 className="app-title">2018年中苏科技股份有限公司年会暨新三板挂牌庆典</h1>
        <Row type="flex" justify="center" gutter={24}>
          <Col span={12}>
            <Lottery height={store.contentHeight} />
          </Col>
          <Col span={6}>
            <Winners height={store.contentHeight} />
          </Col>
        </Row>
        {/* <div className="html5_video">
          <video autoplay="true" loop="true" src="https://raw.githubusercontent.com/jschyz/lottery/master/video/cloud.mp4"></video>
        </div> */}
      </div>
    )
  }
}

export default App