import React from 'react';
import { Calendar, Card, Carousel, Table } from 'antd';
import ProList from '@ant-design/pro-list';

// @ts-ignore
import styles from './index.less';
// @ts-ignore
import bg1 from '@/asserts/background/1.jpg';
// @ts-ignore
import bg5 from '@/asserts/background/5.jpg';
// @ts-ignore
import bg3 from '@/asserts/background/3.jpg';
// @ts-ignore
import bg4 from '@/asserts/background/4.jpg';
import CustomIcon from '@/components/CustomIcon';

const Info = [
  {
    tableInfoName1: '服务器ip地址',
    tableInfoList1: '127.0.0.1',
    tableInfoName2: '服务器域名',
    tableInfoList2: 'www.blog.com',
  },
  {
    tableInfoName1: '服务器ip地址',
    tableInfoList1: '127.0.0.1',
    tableInfoName2: '服务器域名',
    tableInfoList2: 'www.blog.com',
  },
  {
    tableInfoName1: '服务器ip地址',
    tableInfoList1: '127.0.0.1',
    tableInfoName2: '服务器域名',
    tableInfoList2: 'www.blog.com',
  },
  {
    tableInfoName1: '服务器ip地址',
    tableInfoList1: '127.0.0.1',
    tableInfoName2: '服务器域名',
    tableInfoList2: 'www.blog.com',
  },
  {
    tableInfoName1: '服务器ip地址',
    tableInfoList1: '127.0.0.1',
    tableInfoName2: '服务器域名',
    tableInfoList2: 'www.blog.com',
  },
];

const data = [
  ['语雀的天空', <CustomIcon type={'icon-user'} />],
  ['Ant Design', <CustomIcon type={'icon-user'} />],
  ['蚂蚁金服体验科技', <CustomIcon type={'icon-user'} />],
  ['TechUI', <CustomIcon type={'icon-user'} />],
  ['TechUI 2.0', <CustomIcon type={'icon-user'} />],
  ['Bigfish', <CustomIcon type={'icon-user'} />],
  ['Umi', <CustomIcon type={'icon-user'} />],
].map((username) => ({
  avatar: username[1],
  title: username[0],
  content: (
    <div>
      <div className={styles.listIp}>ip</div>
      <div className={styles.listTime}>time</div>
    </div>
  ),
}));

const { Column } = Table;

export default (): React.ReactNode => {
  return (
    <div>
      <Card>
        <div>
          <Carousel autoplay={true} effect={'fade'}>
            <div className={styles.carousel}>
              <img src={bg1} />
            </div>
            <div className={styles.carousel}>
              <img src={bg5} />
            </div>
            <div className={styles.carousel}>
              <img src={bg3} />
            </div>
            <div className={styles.carousel}>
              <img src={bg4} />
            </div>
          </Carousel>
        </div>
      </Card>
      <Card>
        <div className={styles.calendar}>
          <h1>当前时间</h1>
          <Calendar fullscreen={false} />
        </div>
        <div className={styles.table}>
          <h1>服务器信息</h1>
          <Table
            dataSource={Info}
            pagination={{
              defaultPageSize: 4,
            }}
          >
            <Column
              title={'信息名'}
              dataIndex={'tableInfoName1'}
              key={'tableInfoName1'}
              className={styles.tableInfoName}
            />
            <Column
              title={'详细信息'}
              dataIndex={'tableInfoList1'}
              key={'tableInfoList1'}
              className={styles.tableInfoList}
            />
            <Column
              title={'信息名'}
              dataIndex={'tableInfoName2'}
              key={'tableInfoName2'}
              className={styles.tableInfoName}
            />
            <Column
              title={'详细信息'}
              dataIndex={'tableInfoList2'}
              key={'tableInfoList2'}
              className={styles.tableInfoList}
            />
          </Table>
        </div>
      </Card>
      <Card>
        <div className={styles.list}>
          <h1>登陆记录</h1>
          <ProList
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
            }}
            split={true}
            metas={{
              avatar: {},
              title: {},
              content: {},
            }}
            dataSource={data}
          />
        </div>
      </Card>
    </div>
  );
};
