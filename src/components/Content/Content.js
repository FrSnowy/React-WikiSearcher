import React from 'react';
import Core from '../Core/Core';
import './Content.scss';

class Content extends Core {
  render() {
    const { className, theme, children } = this.props;
    return (
      <div className = {`${className}-wrapper ${theme}`}>
        {children}
      </div>
    );
  };

  _loadImportantProps() {
    return [...super._loadImportantProps()];
  }
};

export default Content;
