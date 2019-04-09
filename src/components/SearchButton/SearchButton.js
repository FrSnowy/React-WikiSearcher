import React from 'react';
import Core from '../Core/Core';
import './SearchButton.scss';
import lookupIcon from '../../assets/img/search.svg';

class SearchButton extends Core {
  render() {
    const { className, activity, startSearch, theme } = this.props;

    return (
      <div
        onClick = { startSearch }
        className = {`${className} ${activity} ${theme}`}
      >
        <img src = { lookupIcon } alt = "Искать" />
      </div>
    );
  };

  _loadImportantProps() {
    return [...super._loadImportantProps()];
  };

};

export default SearchButton;
