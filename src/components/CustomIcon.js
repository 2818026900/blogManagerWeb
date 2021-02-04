import { createFromIconfontCN } from '@ant-design/icons';
import { Component } from 'react';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2355088_rqouz1nwya.js',
});

class CustomIcon extends Component {
  render() {
    return <IconFont type={this.props.type} />;
  }
}

export default CustomIcon;
