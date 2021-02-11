import { createFromIconfontCN } from '@ant-design/icons';
import { Component } from 'react';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2355088_1k9eaeh4p9r.js',
});

class CustomIcon extends Component {
  render() {
    return <IconFont type={this.props.type} style={{ fontsize: '50px' }} />;
  }
}

export default CustomIcon;
