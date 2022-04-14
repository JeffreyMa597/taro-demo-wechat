import React, { useCallback } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks';
// import avatar from '../../images/avatar.jpeg';

import './index.less';

const Index = () => {
  const env = useEnv();
  

  return (
    <View className='main'>
      main
      {/* <Image className='logo' src={avatar} /> */}
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
