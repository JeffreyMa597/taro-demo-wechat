import React, { useCallback } from 'react';
import { View, Button, Input, Image, ScrollView } from '@tarojs/components';
// import { Button, Cell, Icon } from '@nutui/nutui-taro';
// import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks';
// import bgMain from '../../images/bg_main.png';
// import bgTop from '../../../imgs/bg_main.png';
import headerBg from '../../images/header.png';

import './index.less';

const Index = () => {
  const mockData = {
    time: '2022/04/14',
    category: 1, // 1 线下  2 线上
    address: '腾讯会议'
  };

  const arrData: any[] = [];
  for (let i = 0; i < 30; i++) {
    arrData.push(JSON.parse(JSON.stringify(mockData)));
  }

  console.log(arrData, 'arrData');
  // const env = useEnv();
  // const [_, { setTitle }] = useNavigationBar({ title: 'Taro Hooks' });
  // const [show] = useModal({
  //   title: 'Taro Hooks!',
  //   showCancel: false,
  //   confirmColor: '#8c2de9',
  //   confirmText: '支持一下',
  //   mask: true
  // });
  // const [showToast] = useToast({ mask: true });

  // const handleModal = useCallback(() => {
  //   show({ content: '不如给一个star⭐️!' }).then(() => {
  //     showToast({ title: '点击了支持!' });
  //   });
  // }, [show, showToast]);

  return (
    <View className='wrapper-main'>
      <Image className='bg-img' src={headerBg} mode='aspectFill' />
      <View className='content'>
        <View className='header-bg'></View>
        <View className='add-input-cls'>
          <Input
            style={{ width: '100%', fontSize: '28rpx' }}
            cursor={1000}
            placeholder='2022/4/13 23:38 线上 腾讯会议'
          />
        </View>
        <View className='scroll-box'>
          <ScrollView scrollY enableFlex className='scrollview'>
            {arrData.map(item => (
              <View className='item-cls'>{item.time}</View>
            ))}
          </ScrollView>
        </View>
      </View>
      {/* <Image className='logo' src={bgMain} /> */}
      {/* <Text className='title'>为Taro而设计的Hooks Library</Text>
      <Text className='desc'>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <Button className='button' onClick={() => setTitle('Taro Hooks Nice!')}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button> */}
    </View>
  );
};

export default Index;
