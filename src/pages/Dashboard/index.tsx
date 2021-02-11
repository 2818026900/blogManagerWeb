import React from 'react';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import styles from './index.less';
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';

const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 },
];

const cols = {
  sold: { alias: '销售量' },
  genre: { alias: '游戏种类' },
};

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <div style={{ height: '210px' }}>
        <Card className={styles.cardList}>1</Card>
        <Card className={styles.cardList}>2</Card>
        <Card className={styles.cardList}>3</Card>
        <Card className={styles.cardList}>4</Card>
      </div>
      <div style={{ height: '410px' }}>
        <Card>
          <Chart width={600} height={400} data={data} scale={cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </Card>
      </div>
    </PageContainer>
  );
};
