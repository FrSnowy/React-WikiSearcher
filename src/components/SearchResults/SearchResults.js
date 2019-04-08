import React from 'react';
import Core from '../Core/Core';
import { connect } from 'react-redux';
import './SearchResults.scss';
import SearchResult from '../SearchResult/SearchResult';

class SearchResults extends Core {
  render() {
    const { className } = this.props;
    if (this.props.results) {
      const resultCards = this.props.results.search.map((searchResult, i) =>
        <SearchResult
          key = { i }
          className = "result"
          title = {searchResult.title}
          snippet = { searchResult.snippet }
        />
      )

      if (resultCards.length > 0) {
        return(
          <div className = {`${className}-wrapper`}>
            <div className = {`${className}-title`}>
              <h3>Результаты поиска по запросу</h3>
              <span>"{this.props.query}"</span>
            </div>
            <div className = {`${className}-content`}>
              { resultCards }
            </div>
          </div>
        )
      } else {
        return(
          <div className = {`${className}-wrapper`}>
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
        <div className = {`${className}-wrapper empty`}/>
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

export default connect(mapStateToProps)(SearchResults);
