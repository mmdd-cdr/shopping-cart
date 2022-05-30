import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { Slider, Row, Col, Switch, InputNumber, Spin } from 'antd';
import './index.scss';

const HomePage = () => {
  // 设置速度
  const [speed, setSpeed] = useState(1);
  // 设置是否循环
  const [loop, setlLoop] = useState(true as boolean | number);
  // 设置播放
  const [play, setlPlay] = useState(true);
  // 设置播放范围
  const [playRange, setlPlayRange] = useState([0, 198] as [number, number]);
  // 设置当前帧
  const [goto, setGoto] = useState(198);
  // 是否反向
  const [direction, setDirection] = useState(1 as any);
  // lottie动画
  const [animationData, setAnimationData] = useState(null as any);

  useEffect(() => {
    import('@/asset/spin-wheel.json').then(setAnimationData);
  }, []);

  return <div className='home' >
    <Spin spinning={setAnimationData===null} >
      <Lottie
        loop={loop}
        speed={speed}
        play={play}
        segments={playRange}
        goTo={goto}
        animationData={animationData}
        direction={direction}
        style={{ width: 400, height: 400 }}
        onComplete={() => console.log('播放结束')}
        onLoopComplete={() => console.log('进入一个新的循环')}
        onEnterFrame={() => { console.log('正在运行中') }}
        onSegmentStart={() => console.log('开始播放')}
        onLoad={() => console.log('加载中')}
      />
    </Spin>
    <div className='active' >
      <Row gutter={[0, 16]} >
        <Col className='font' span={4} >速度</Col>
        <Col span={20} >
          <Slider max={10} min={0} step={0.01} value={speed} onChange={(e) => {
            setSpeed(e);
          }} />
        </Col>
        <Col className='font' span={4} >循环</Col>
        <Col span={20} >
          <Switch checked={!!loop} onChange={(e) => setlLoop(e)} />
        </Col>
        <Col className='font' span={4} >循环次数</Col>
        <Col span={20} >
          <InputNumber onChange={(e) => setlLoop(parseInt(e as string))} />
        </Col>
        <Col className='font' span={4} >是否播放</Col>
        <Col span={20} >
          <Switch checked={!!play} onChange={(e) => setlPlay(e)} />
        </Col>
        <Col className='font' span={4} >播放范围</Col>
        <Col span={20} >
          <Slider range={true} max={198} min={0} step={1} value={[...playRange]} onChange={(e) => {
            setlPlayRange(e);
          }} />
        </Col>
        <Col className='font' span={4} >播放到</Col>
        <Col span={20} >
          <Slider max={198} min={0} step={1} value={goto} onChange={(e) => {
            setGoto(e);
          }} />
        </Col>
        <Col className='font' span={4} >是否反向</Col>
        <Col span={20} >
          <Switch checked={direction === -1} onChange={(e) => {
            setDirection(e ? -1 : 1)
          }
          } />
        </Col>
      </Row>
    </div>
  </div>
}
export default HomePage;