import React from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';
import CustomIcon from "@/components/CustomIcon";

export default () => (
  <DefaultFooter
    copyright="全开源个人博客平台 @2021-01-28"
    links={[
      {
        key: 'github',
        title: <CustomIcon type={'icon-github'} />,
        href: 'https://github.com/2818026900/blogManagerWeb.git',
        blankTarget: true,
      },
      {
        key: 'gitee',
        title: <CustomIcon type={'icon-gitee'} />,
        href: 'https://gitee.com/LiMengYangCodeing/blogManagerWeb.git',
        blankTarget: true,
      },
    ]}
  />
);
