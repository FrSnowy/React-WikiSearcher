import React from 'react';
import Core from '../Core/Core';
import './SearchButton.scss';
import lookupIcon from '../../assets/img/search.svg';

class SearchButton extends Core {
  render() {
    const { className, activity, startSearch } = this.props;

    return (
      <div
        onClick = { startSearch }
        className = {`${className} ${activity}`}
      >
        <img src = { lookupIcon } alt = "Искать" />
      </div>
    );
  };

  _loadImportantProps() {
    return ['className', ...super._loadImportantProps()];
  };

};

export default SearchButton;
