import React from 'react';
import Core from '../Core/Core';
import SearchButton from '../SearchButton/SearchButton';
import { connect } from 'react-redux';
import actions from './SearchBar.actions';
import parseUrl from '../parseURL';
import { withRouter } from 'react-router-dom';
import './SearchBar.scss';

class SearchBar extends Core {
  constructor(props) {
    super(props);

    const searchString = parseUrl(this.props.location, 'q'); 
    if (searchString) {
      this.props.updateSearchString(searchString);
      this.props.saveSearchString(searchString);
      this.props.getInfo(searchString);
    }
  }
  render() {
    const  { className, searchString, activity, updateSearchString, theme } = this.props;
    return (
      <div className = {`${className}-wrapper ${activity} ${theme}`}>
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
          theme = { this.props.theme }
        />
      </div>
    );
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const searchString = parseUrl(this.props.location, 'q');
      if (searchString) {
        this.props.updateSearchString(searchString);
        this.props.saveSearchString(searchString);
        this.props.getInfo(searchString);
      }
      console.log(searchString);
    }
  }

  startSearchOnEnter(e) {  
    if (e.keyCode === 13) {
      e.preventDefault();
      this.startSearch();
    }
  }

  async startSearch() {
    if (this.props.searchString.length >= 3 && this.props.activity === 'reading') {
      this.props.history.push(`/?q=${this.props.searchString.replace(/&/g, '').replace(/\?/g, '')}`)
    } else {
      this.props.changeActivity('error-animation');
      setTimeout(() => this.props.changeActivity('reading'), 400)
    }
  }

  _loadImportantProps() {
    return ['placeHolder', ...super._loadImportantProps()];
  }
};

const mapStateToProps = store => ({
  searchString: store.searchBar.searchString,
  cachedString: store.searchBar.cachedString,
  activity: store.searchBar.activity,
});

const mapDispatchToProps = dispatch => (
  {
    updateSearchString: event => dispatch(
      actions.updateSearchValue(event)
    ),
    saveSearchString: searchString => dispatch(
      actions.saveSearchString(searchString)
    ),
    changeActivity: (value) => dispatch(
      actions.changeActivity(value)
    ),
    getInfo: (bySelector) => dispatch(
      actions.getInfo(bySelector)
    ),
  }
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
