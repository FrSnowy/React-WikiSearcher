import { Component } from 'react';

class Core extends Component {
  constructor (props) {
    super(props);

    this.importantProps = this._loadImportantProps();

    this.importantProps.length === 0 && console.error(`React Component must have atleast 1 props`);
  
    this.importantProps.forEach(prop =>
      !this.props[prop] && console.error(`${prop} is not founded in component props list`)
    );
  };

  render() {
    return null;
  };

  _loadImportantProps() {
    return [];
  };
}

export default Core;
