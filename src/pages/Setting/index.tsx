import React from 'react';
import { useIntl } from 'umi';
import { Alert, Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

export default (): React.ReactNode => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.setting.alertMessage',
            defaultMessage: '设置中心',
          })}
          type={'success'}
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
      </Card>
    </PageContainer>
  );
};
