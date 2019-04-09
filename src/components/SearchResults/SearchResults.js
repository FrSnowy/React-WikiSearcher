import React from 'react';
import Core from '../Core/Core';
import { connect } from 'react-redux';
import './SearchResults.scss';
import { withRouter } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult';
import SearchFilters from '../SearchFilters/SearchFilters';
import parseURL from '../parseURL';

class SearchResults extends Core {
  sortResults(unsortedResults, by, direction) {
    let results = unsortedResults;

    switch (direction) {
      case 'down':
        results = results.sort(
          (result, nextResult) => {
            if (result[by] < nextResult[by]) return 1;
            if (nextResult[by] < result[by]) return -1;
            return 0;
          }
        )
        break;
      case 'up':
        results = results.sort(
          (result, nextResult) => {
            if (result[by] < nextResult[by]) return -1;
            if (nextResult[by] < result[by]) return 1;
            return 0;
          }
        )
        break;          
      default: break;
    }

    return results;
  }
  render() {
    const { className, theme } = this.props;
    if (this.props.results) {
      const nameDirection = parseURL(this.props.location, 'name') || 'no';
      let sortedResults = this.sortResults(this.props.results.search, 'title', nameDirection);
      const resultCards = sortedResults.map((searchResult, i) =>
        <SearchResult
          key = { i }
          className = "result"
          title = {searchResult.title}
          snippet = { searchResult.snippet }
          theme = { this.props.theme }
        />
      )

      if (resultCards.length > 0) {
        return(
          <div className = {`${className}-wrapper ${theme}`}>
            <div className = {`${className}-title`}>
              <h3>Результаты поиска по запросу</h3>
              <span>"{this.props.query}":</span>
            </div>
            <SearchFilters className = 'filters' theme = { theme }/>
            <div className = {`${className}-content`}>
              { resultCards }
            </div>
          </div>
        )
      } else {
        return(
          <div className = {`${className}-wrapper ${theme}`}>
            <div className = {`${className}-title`}>
              <h3>По запросу</h3>
              <span>"{this.props.query}"</span>
              <h3>ничего не найдено</h3>
            </div>
          </div>
        )
      }      
    } else {
      return (
        <div className = {`${className}-wrapper empty ${theme}`}/>
      )
    }
  };

  _loadImportantProps() {
    return [...super._loadImportantProps()];
  }
};

const mapStateToProps = store => ({
  results: store.searchBar.results,
  query: store.searchBar.cachedString,
});

export default withRouter(
  connect(mapStateToProps)(SearchResults)
);
