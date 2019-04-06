import React from 'react';
import Core from '../Core/Core';
import SearchButton from '../SearchButton/SearchButton';

import { connect } from 'react-redux';
import actions from './SearchBar.actions';
import './SearchBar.scss';

class SearchBar extends Core {
  render() {
    const  { className, searchString, activity, updateSearchString } = this.props;
    return (
      <div className = {`${className}-wrapper ${activity}`}>
        <form>
          <input type = "text"
            placeholder = { searchString === null || searchString === ''   ? this.props.placeHolder : '' }
            onChange = {updateSearchString}
            onKeyDown = { this.startSearchOnEnter.bind(this) }
            value = {searchString || ''}
          />
        </form>
        <SearchButton
          className = "search-button"
          activity = { activity }
          startSearch = { this.startSearch.bind(this) }
        />
      </div>
    );
  };

  startSearchOnEnter(e) {  
    if (e.keyCode === 13) {
      e.preventDefault();
      this.startSearch();
    }
  }

  async startSearch() {
    if (this.props.searchString.length >= 3 && this.props.activity === 'reading') {
      this.props.changeActivity('searching');
    } else {
      this.props.changeActivity('error-animation');
      setTimeout(() => this.props.changeActivity('reading'), 400)
    }
  }

  _loadImportantProps() {
    return ['className', 'placeHolder', ...super._loadImportantProps()];
  }
};

const mapStateToProps = store => ({
  searchString: store.searchBar.searchString,
  activity: store.searchBar.activity,
});

const mapDispatchToProps = dispatch => (
  {
    updateSearchString: event => dispatch(
      actions.updateSearchValue(event)
    ),
    changeActivity: (value) => dispatch(
      actions.changeActivity(value)
    ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
