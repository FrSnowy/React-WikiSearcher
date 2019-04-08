import React from 'react';
import Core from '../Core/Core';
import './Content.scss';

class Content extends Core {
  render() {
    return (
      <div className = {`${this.props.className}-wrapper`}>
        {this.props.children}
      </div>
    );
  };

  _loadImportantProps() {
    return [...super._loadImportantProps()];
  }
};

export default Content;
