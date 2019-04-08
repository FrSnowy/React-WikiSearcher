import React from 'react';
import Core from '../Core/Core';
import { withRouter } from 'react-router-dom';
import parseURL from '../parseURL';

class Sorter extends Core {
  render() {
    const { className, title } = this.props;

    return (
      <div className = {`filter filter-${className}`}>
        <div className = "filter-name">{title}:</div>
        <select
          className = "alphabet-select"
          value = { parseURL(this.props.location, this.props.query) || 'no' }
          onChange = { this.changeHandler.bind(this) }>
          {
            this.props.variants.map((variant, i) =>
              <option value = {variant.name} key = {i}>{variant.text}</option>  
            )
          }
        </select>
      </div>
    );
  };

  changeHandler(e) {
    const currentFullPath = `${this.props.location.pathname}${this.props.location.search}`;
    const fullPathWithoutFilter = currentFullPath
      .replace(new RegExp(`&${this.props.query}=[^&?]*`, 'g'), '');

    this.props.history.replace(`${fullPathWithoutFilter}&${this.props.query}=${e.target.value}`)
  }

  _loadImportantProps() {
    return [...super._loadImportantProps(), 'title', 'variants', 'query'];
  };

};

export default withRouter(Sorter);
