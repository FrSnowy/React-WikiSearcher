import React from 'react';
import Core from '../Core/Core';

class Block extends Core {
  render() {
    const { className, theme, children } = this.props;
    return (
      <div className = {`${className} ${theme}`}>{children}</div>
    );
  }

  _loadImportantProps() {
    return super._loadImportantProps();
  }
}

export default Block;
